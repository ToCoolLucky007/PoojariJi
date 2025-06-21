'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RefundPolicy() {

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
            <RefreshCw className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shipping Policy</h1>
          <p className="text-xl text-gray-600">
            Delivering Puja Essentials, Reverently and Reliably.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Shipping Policy</CardTitle>
            <p className="text-gray-600">Last updated: June 1, 2025</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Order Processing</h2>
                <p>Once your order is placed (puja service or puja items), we'll confirm availability and send an email/SMS/WhatsApp/inapp notification.</p>

                <p>  Prepare 24–48 hours for processing: verification, scheduling pandit, and arranging samagri.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Shipping of Puja Samagri (Items)</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Puja items (effigies, materials, etc.) dispatched within 1–3 business days across India.</li>
                  <li>Shipping options include standard courier; expedited shipping available upon request (charges apply).</li>
                  <li>Tracking details will be emailed once the package is dispatched.</li>
                </ul>

                {/* 
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
                </div> */}
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Delivery Estimates</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard deliveries: 3–7 business days (metro hubs may be faster).</li>
                  <li>Remote or rural addresses: up to 10–12 days due to logistics constraints.</li>

                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Shipping Charges</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard rate based on weight and delivery zone.</li>
                  <li>Free shipping offered on puja packages above specified thresholds (e.g., priests + materials serviced together).</li>
                  <li>Exact charges shown at checkout before order confirmation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Delivery & Failed Attempts</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li> Courier makes up to 3 delivery attempts.</li>
                  <li> If undelivered after final attempt, package returns to us.</li>
                  <li> We’ll contact you to arrange reshipment at your expense.</li>
                </ul>

              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Returns & Refunds</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Physical puja items (non-service) may be returned within 7 days of delivery if damaged or incorrect, in original condition and packaging.</li>
                  <li>Upon receipt, we’ll process a replacement or refund to your original payment method within 14 days. </li>
                  <li>Service bookings are non-refundable per our Refund Policy unless the service was disrupted due to our error or force majeure.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Cancellations</h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancel physical goods order before shipping and get a full refund.</li>
                  <li>After dispatch, follow the return policy for any issues.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Contact & Support</h2>
                <p className="mb-4">Have questions about your delivery? Reach out:</p>
                <ul className="list-disc pl-6 space-y-2">
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