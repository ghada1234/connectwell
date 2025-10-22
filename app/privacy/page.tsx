import { Shield, Lock, Eye, Database, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: October 22, 2025</p>
        </div>

        <div className="card space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At ConnectWell, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our platform. Please read this 
              privacy policy carefully.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Personal Information:</strong></p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Name and contact information (email, phone)</li>
                <li>Account credentials</li>
                <li>Profile information and preferences</li>
                <li>Booking and session history</li>
              </ul>
              
              <p className="mt-4"><strong>Usage Information:</strong></p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Browsing activity and search queries</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Provide and maintain our services</li>
              <li>Match you with suitable therapists</li>
              <li>Process bookings and payments</li>
              <li>Send important notifications and updates</li>
              <li>Improve our platform and user experience</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
            </div>
            <p className="text-gray-700 mb-3">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Therapists:</strong> When you book a session, necessary information is shared</li>
              <li><strong>Service Providers:</strong> Trusted partners who assist in platform operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
              <li><strong>With Your Consent:</strong> Any other sharing is done with your explicit permission</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 mt-3">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal information</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to improve your experience. You can control 
              cookie preferences through your browser settings. Note that disabling cookies may affect 
              platform functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our service is not intended for children under 18. We do not knowingly collect information 
              from children. If you believe we have collected information from a child, please contact us 
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
              <p className="text-gray-900"><strong>Email:</strong> privacy@connectwell.com</p>
              <p className="text-gray-900 mt-2"><strong>Mail:</strong> ConnectWell Privacy Office, 123 Wellness Street, Health City, HC 12345</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

