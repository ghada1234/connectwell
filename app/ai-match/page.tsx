"use client";

import { useState } from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { getAITherapistRecommendations } from '@/lib/gemini';
import { MOCK_THERAPISTS } from '@/lib/data/mockTherapists';
import TherapistCard from '@/components/TherapistCard';
import { Therapist } from '@/lib/types';

export default function AIMatchPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    concerns: '',
    preferredLanguage: '',
    preferredGender: '',
    sessionType: '',
    additionalNotes: ''
  });
  const [recommendations, setRecommendations] = useState<{ therapist: Therapist; reasoning: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const userNeeds = `
      Main concerns: ${formData.concerns}
      Preferred language: ${formData.preferredLanguage || 'Any'}
      Preferred gender: ${formData.preferredGender || 'Any'}
      Preferred session type: ${formData.sessionType || 'Any'}
      Additional notes: ${formData.additionalNotes || 'None'}
    `;

    try {
      const results = await getAITherapistRecommendations(userNeeds, MOCK_THERAPISTS);
      setRecommendations(results);
      setStep(2);
    } catch (error) {
      console.error('Error getting recommendations:', error);
      alert('Sorry, there was an error getting recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {step === 1 ? (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">AI-Powered Therapist Matching</h1>
              <p className="text-xl text-gray-600">
                Answer a few questions and let AI find your perfect match
              </p>
            </div>

            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What brings you here today? What would you like help with?
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="input-field"
                    placeholder="E.g., I'm struggling with anxiety and stress from work. I'd like to learn coping strategies..."
                    value={formData.concerns}
                    onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Language (Optional)
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="E.g., English, Spanish, etc."
                      value={formData.preferredLanguage}
                      onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Gender (Optional)
                    </label>
                    <select
                      className="input-field"
                      value={formData.preferredGender}
                      onChange={(e) => setFormData({ ...formData, preferredGender: e.target.value })}
                    >
                      <option value="">No preference</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-binary">Non-binary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Session Type Preference (Optional)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['online', 'in-person', 'community'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, sessionType: type })}
                        className={`p-3 border-2 rounded-lg capitalize transition ${
                          formData.sessionType === type
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                            : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Anything else we should know? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="input-field"
                    placeholder="Any other preferences or requirements..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="inline-block h-5 w-5 mr-2 animate-spin" />
                      Finding Your Perfect Match...
                    </>
                  ) : (
                    <>
                      Find My Match
                      <ArrowRight className="inline-block h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Perfect Matches</h1>
              <p className="text-xl text-gray-600">
                Based on your needs, here are our AI-recommended therapists
              </p>
            </div>

            <div className="space-y-8 mb-8">
              {recommendations.map((rec, index) => (
                <div key={rec.therapist.id} className="card bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Recommended Match</h2>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
                    <p className="text-indigo-900">
                      <strong className="font-semibold">Why this match:</strong> {rec.reasoning}
                    </p>
                  </div>
                  <TherapistCard therapist={rec.therapist} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  setStep(1);
                  setRecommendations([]);
                  setFormData({
                    concerns: '',
                    preferredLanguage: '',
                    preferredGender: '',
                    sessionType: '',
                    additionalNotes: ''
                  });
                }}
                className="btn-secondary"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

