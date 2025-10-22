import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "ConnectWell - Find Your Perfect Therapist or Life Coach",
  description: "Connect with certified therapists and life coaches from all nationalities, genders, and languages. Get support online, in-person, or in community settings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ConnectWell</h3>
                <p className="text-gray-400 mb-4">Your path to wellness and personal growth.</p>
                <p className="text-gray-400 text-sm">Available 24/7 for support</p>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:support@connectwell.com" className="hover:text-white transition">
                    support@connectwell.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/therapists" className="hover:text-white transition">Find Therapists</Link></li>
                  <li><Link href="/ai-match" className="hover:text-white transition">AI Matching</Link></li>
                  <li><Link href="/community" className="hover:text-white transition">Community Forum</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                  <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 ConnectWell. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

