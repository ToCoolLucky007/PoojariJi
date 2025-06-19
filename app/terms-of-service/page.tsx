import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl">🕉️</div>
              <h1 className="text-xl font-bold">Pujaari Ji</h1>
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
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Terms of Service for PujaariJi</CardTitle>
            <p className="text-gray-600">Last updated: June 1, 2025</p>
            <p>Welcome to Pujaari Ji, a product and brand owned and operated by Bhudhar Software LLP, the parent company of Pujaari Ji. Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Pujaari Ji website and services (the "Service") provided by Bhudhar Software LLP ("us", "we", or "our").</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using PujaariJi's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
                <p className="mb-4">PujaariJi provides a platform that connects users with qualified pandits for various Hindu religious ceremonies and rituals including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Puran Katha and religious narrations</li>
                  <li>Shanti Puja and peace ceremonies</li>
                  <li>Havan and fire rituals</li>
                  <li>Sanskar Vidhi and life ceremonies</li>
                  <li>Sthapan Puja and installation ceremonies</li>
                  <li>Festival celebrations and seasonal pujas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="mb-4">As a user of our platform, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when booking services</li>
                  <li>Treat our pandits and staff with respect and courtesy</li>
                  <li>Make payments as agreed upon booking confirmation</li>
                  <li>Provide appropriate space and facilities for ceremonies</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Booking and Payment</h2>
                <p className="mb-4">When booking our services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All bookings are subject to availability and confirmation</li>
                  <li>Payment terms will be communicated at the time of booking</li>
                  <li>Advance payment may be required for certain services</li>
                  <li>Additional charges may apply for travel, special materials, or extended services</li>
                  <li>All prices are subject to change without notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Cancellation and Refunds</h2>
                <p className="mb-4">Our cancellation policy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellations must be made at least 24 hours before the scheduled service</li>
                  <li>Refund eligibility depends on the timing of cancellation</li>
                  <li>Emergency cancellations will be handled on a case-by-case basis</li>
                  <li>No-shows may result in full charge</li>
                  <li>Weather-related cancellations will be rescheduled without penalty</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
                <p>All content on our platform, including text, graphics, logos, and software, is owned by PujaariJi and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p>PujaariJi shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Privacy</h2>
                <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Punjab, India.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">11. Contact Information</h2>
                <p className="mb-4">For questions about these terms, please contact us:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> info@pujaariji.in</li>
                  <li><strong>Phone:</strong> +91 9310065609</li>
                  <li><strong>Address:</strong> 9th Floor, Tricity Trade Tower, Zirakpur, Punjab, India - 140603</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}