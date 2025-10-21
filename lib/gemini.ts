import { GoogleGenerativeAI } from "@google/generative-ai";
import { Therapist } from './types';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export async function getAITherapistRecommendations(
  userNeeds: string,
  therapists: Therapist[]
): Promise<{ therapist: Therapist; reasoning: string }[]> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are an AI assistant helping match people with therapists. 
    
User's needs and preferences: ${userNeeds}

Available therapists:
${therapists.map((t, i) => `
${i + 1}. ${t.name}
   - Specializations: ${t.specializations.join(', ')}
   - Languages: ${t.languages.join(', ')}
   - Gender: ${t.gender}
   - Experience: ${t.yearsOfExperience} years
   - Session types: ${t.sessionTypes.join(', ')}
   - Bio: ${t.bio}
`).join('\n')}

Based on the user's needs, recommend the TOP 3 most suitable therapists. For each recommendation, provide:
1. The therapist number (1-${therapists.length})
2. A brief explanation (2-3 sentences) of why they're a good match

Format your response as JSON array:
[
  {
    "therapistNumber": 1,
    "reasoning": "explanation here"
  }
]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('Invalid AI response format');
    }
    
    const recommendations = JSON.parse(jsonMatch[0]);
    
    return recommendations
      .slice(0, 3)
      .map((rec: any) => ({
        therapist: therapists[rec.therapistNumber - 1],
        reasoning: rec.reasoning
      }))
      .filter((rec: any) => rec.therapist); // Filter out invalid recommendations
      
  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    // Fallback to simple matching
    return therapists.slice(0, 3).map(t => ({
      therapist: t,
      reasoning: 'Highly rated and experienced professional in their field.'
    }));
  }
}

