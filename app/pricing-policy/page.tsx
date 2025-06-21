'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PricingPolicy() {
  const [hideHeader, setHideHeader] = useState(false);
  // Check URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');

    setHideHeader(source === 'app');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      {!hideHeader && (
        <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl"><img src="/images/logo.png" alt="Poojari Ji" width="70" height="50" /></div>
                <h1 className="text-xl font-bold">Poojari Ji</h1>
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
      )}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing Policy</h1>
          <p className="text-xl text-gray-600">
            We believe in transparent and fair pricing. Learn how we structure our fees and what you can expect before booking a service.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Pricing Policy</CardTitle>
            <p className="text-gray-600">Last updated: June 1, 2025</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Components of Pricing</h2>
                <p className="mb-4">Each puja or ritual service booking comprises two distinct components:</p>
                <div className="bg-orange-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-3">Professional Fee</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>This is the dakshina/remuneration paid directly to the Pujari (priest) or spiritual specialist performing the ritual.</li>
                    <li>It covers their:
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Time and expertise</li>
                        <li> Travel and preparation</li>
                        <li>Customization of the ritual based on your needs</li>
                      </ul>
                    </li>
                    <li>This fee varies based on location, ritual type, duration, and seniority of the priest.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-3">Worship Materials Cost</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Charges for puja samagri (materials, flowers, ghee, clothes, etc.) required to perform the ritual.</li>
                    <li>Materials may be:
                      <ul>
                        <li>Supplied by us (through vendors/temples)</li>
                        <li>Procured by you (if chosen during booking)</li>
                      </ul>
                    </li>
                    <li>All rates are based on prevailing market prices and logistic factors.</li>
                  </ul>
                </div>
                <p className="mb-4">Both charges are itemized and shown transparently before you confirm the booking.</p>

              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Payment Terms</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Currency:</strong> All payments are in Indian Rupees (INR).</li>
                  <li><strong>Modes Accepted:</strong> UPI, Net Banking, Credit/Debit Cards, Wallets, or direct bank transfer.</li>
                  <li><strong>Advance Booking:</strong> Full payment is required to confirm your puja slot.</li>
                  <li><strong>Receipt:</strong> A digital invoice is sent upon successful transaction.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Price Changes</h2>
                <p className="mb-4">Prices may be adjusted:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Before booking confirmation, due to updated logistics, demand, or changes in materials.</li>
                  <li>After booking, only in rare cases (e.g., surge in material cost or government taxes). You will be notified, and you may accept or cancel with a full refund.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Cancellation & Refunds</h2>
                <div className="bg-orange-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-3">By Devotee:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>100% refund if cancelled at least 48 hours before the scheduled puja.</li>
                    <li>No refund if cancelled within 48 hours or on the event day.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-3">By Poojariji:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>If the pujari is unavailable or we cancel: Full refund or free rescheduling.</li>
                    <li>If the temple service is cancelled by the temple: Rescheduling will be offered, but refunds may not be possible in all cases.</li>
                  </ul>
                </div>
                <p className="mb-4">Refunds are initiated within 12 business days and processed via the original mode of payment.</p>

              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Security & Disclaimer</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment information is securely encrypted via third-party payment gateways.</li>
                  <li>Poojariji is not liable for:
                    <ul>
                      <li>Payment issues arising from your bank or payment provider.</li>
                      <li>Delay or failure caused by natural calamities, internet failures, or third-party logistics.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Policy Changes</h2>
                <p>We may update our pricing structure or refund terms from time to time. All changes will be posted on our website, and where necessary, communicated to you by email. Continued use of our services implies acceptance of the latest version.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
                <p className="mb-4">For any billing-related queries or clarifications:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> support@poojariji.in</li>
                  <li><strong>Phone:</strong> +91 9310065609</li>
                  <li><strong>WhatsApp:</strong> +91 9310065609</li>
                  <li><strong>Hours:</strong> 9:00 AM - 8:00 PM (Monday to Sunday)</li>
                </ul>
              </section>


            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}