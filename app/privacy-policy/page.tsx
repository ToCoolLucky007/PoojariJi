import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl">🕉️</div>
              <h1 className="text-xl font-bold">Pandit Jee Online</h1>
            </Link>
            <Link href="/">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Privacy Policy for Pandit Jee Online</CardTitle>
            <p className="text-gray-600">Last updated: January 1, 2024</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-4">We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create an account or book a service</li>
                  <li>Contact us for customer support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="mt-4">This information may include your name, email address, phone number, address, and payment information.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process bookings and payments</li>
                  <li>Send you service-related communications</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
                <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist us in operating our platform</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking</h2>
                <p>We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Children's Privacy</h2>
                <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
                <p className="mb-4">If you have any questions about this privacy policy, please contact us:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> privacy@panditjeeonline.com</li>
                  <li><strong>Phone:</strong> +91 9876543210</li>
                  <li><strong>Address:</strong> 123 Temple Street, New Delhi, India - 110001</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}