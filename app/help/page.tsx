import { Search, MessageCircle, Book, Video, Mail } from 'lucide-react';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    question: "How do I find the right therapist?",
    answer: "Use our advanced search filters to find therapists by language, nationality, specialization, and more. You can also try our AI-powered matching tool for personalized recommendations."
  },
  {
    question: "How does booking work?",
    answer: "Select a therapist, click 'Book Session', choose your preferred date and time, select session type (online/in-person), and confirm your booking. You'll receive a confirmation email."
  },
  {
    question: "What session types are available?",
    answer: "We offer online video sessions, in-person meetings, and community group sessions. Availability depends on the therapist."
  },
  {
    question: "How does AI matching work?",
    answer: "Our AI-powered tool uses Google Gemini to analyze your needs, preferences, and concerns. It then recommends the top 3 most suitable therapists for you."
  },
  {
    question: "Is my information private?",
    answer: "Yes, absolutely. All your personal information and session details are completely confidential and secured with industry-standard encryption."
  },
  {
    question: "Can I change my booking?",
    answer: "Yes, you can reschedule or cancel your booking from your 'My Bookings' page. Please check the therapist's cancellation policy."
  },
  {
    question: "How do I join the community?",
    answer: "Simply visit the Community page and start browsing discussions. You can create posts and participate anonymously if you prefer."
  },
  {
    question: "What languages are supported?",
    answer: "Our therapists speak over 100 languages including English, Spanish, French, Arabic, Chinese, Hindi, and many more. Use the language filter to find therapists who speak your language."
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">Find answers to common questions</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/how-it-works" className="card text-center hover:shadow-lg transition-shadow">
            <Book className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">How It Works</h3>
            <p className="text-sm text-gray-600 mt-2">Learn how to use the platform</p>
          </Link>

          <Link href="/contact" className="card text-center hover:shadow-lg transition-shadow">
            <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">Contact Us</h3>
            <p className="text-sm text-gray-600 mt-2">Get in touch with our team</p>
          </Link>

          <Link href="/community" className="card text-center hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-pink-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">Community Forum</h3>
            <p className="text-sm text-gray-600 mt-2">Connect with others</p>
          </Link>

          <a href="mailto:support@connectwell.com" className="card text-center hover:shadow-lg transition-shadow">
            <Mail className="h-12 w-12 text-cyan-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900">Email Support</h3>
            <p className="text-sm text-gray-600 mt-2">support@connectwell.com</p>
          </a>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="card bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our support team is here to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Contact Support
            </Link>
            <Link href="/community" className="btn-outline border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg">
              Ask Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

