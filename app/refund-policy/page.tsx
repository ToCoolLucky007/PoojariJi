import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RefundPolicy() {
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
            <RefreshCw className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Refund Policy</h1>
          <p className="text-xl text-gray-600">
            Understanding our refund terms and cancellation procedures.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Refund & Cancellation Policy</CardTitle>
            <p className="text-gray-600">Last updated: January 1, 2024</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. General Refund Policy</h2>
                <p>At Pandit Jee Online, we strive to provide the best religious services. However, we understand that circumstances may require cancellations. Our refund policy is designed to be fair to both our customers and service providers.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Cancellation Time Frames</h2>
                <div className="bg-orange-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-3">Full Refund (100%)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancellation made 7+ days before the scheduled service</li>
                    <li>Service cancellation due to pandit unavailability</li>
                    <li>Force majeure events (natural disasters, government restrictions)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-3">Partial Refund (50%)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancellation made 3-6 days before the scheduled service</li>
                    <li>Rescheduling request within 48 hours of booking confirmation</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">No Refund (0%)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancellation made less than 48 hours before the service</li>
                    <li>No-show or customer unavailability at scheduled time</li>
                    <li>Services already commenced or completed</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Special Circumstances</h2>
                <p className="mb-4">We may consider exceptions to our standard policy in the following cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Medical Emergencies:</strong> Hospitalization or serious illness (medical certificate required)</li>
                  <li><strong>Family Bereavement:</strong> Death in immediate family (documentation required)</li>
                  <li><strong>Weather Conditions:</strong> Severe weather making travel unsafe</li>
                  <li><strong>Government Restrictions:</strong> Lockdowns or restrictions preventing gatherings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Refund Process</h2>
                <p className="mb-4">To request a refund:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our customer service team immediately</li>
                  <li>Provide your booking reference number</li>
                  <li>Submit cancellation request with reason</li>
                  <li>Provide supporting documentation if applicable</li>
                  <li>Await confirmation of refund eligibility</li>
                </ol>
                <p className="mt-4"><strong>Processing Time:</strong> Approved refunds will be processed within 7-10 business days to the original payment method.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Service-Specific Policies</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Multi-Day Events (7+ days)</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cancellation before start: Standard policy applies</li>
                      <li>Cancellation after start: Pro-rated refund for unused days</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Wedding Ceremonies</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>30+ days notice: 90% refund</li>
                      <li>15-29 days notice: 50% refund</li>
                      <li>Less than 15 days: 25% refund</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Festival Bookings</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Due to high demand during festivals, stricter cancellation terms may apply</li>
                      <li>Festival-specific terms will be communicated at booking</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Non-Refundable Items</h2>
                <p className="mb-4">The following are non-refundable:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Convenience fees and service charges</li>
                  <li>Third-party booking platform fees</li>
                  <li>Puja materials and samagri (if already purchased)</li>
                  <li>Travel expenses for outstation services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Rescheduling Options</h2>
                <p className="mb-4">Instead of cancellation, consider rescheduling:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Free rescheduling if done 48+ hours in advance</li>
                  <li>One-time rescheduling allowed per booking</li>
                  <li>Subject to pandit availability</li>
                  <li>New date must be within 6 months of original booking</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Quality Guarantee</h2>
                <p>If you're unsatisfied with our service quality:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Report issues within 24 hours of service completion</li>
                  <li>We'll investigate and offer appropriate resolution</li>
                  <li>Partial refunds may be offered for justified complaints</li>
                  <li>We strive for 100% customer satisfaction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact for Refunds</h2>
                <p className="mb-4">For refund requests or questions:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> refunds@panditjeeonline.com</li>
                  <li><strong>Phone:</strong> +91 9876543210</li>
                  <li><strong>WhatsApp:</strong> +91 9876543210</li>
                  <li><strong>Hours:</strong> 9:00 AM - 8:00 PM (Monday to Sunday)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Policy Updates</h2>
                <p>This refund policy may be updated periodically. Changes will be communicated through our website and email notifications. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}