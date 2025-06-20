import Link from 'next/link';
import { ArrowLeft, HelpCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is PoojariJi?",
        answer: "PoojariJi is a platform that connects devotees with qualified and experienced pandits for various Hindu religious ceremonies, pujas, and rituals. We ensure authentic services performed according to traditional Vedic practices."
      },
      {
        question: "How do I book a pooja or ceremony?",
        answer: "You can book a service by visiting our website, selecting the desired ceremony, filling out the booking form with your details, and submitting it. Our team will contact you within 24 hours to confirm your booking and discuss the details."
      },
      {
        question: "Are your pandits qualified and experienced?",
        answer: "Yes, all our pandits are thoroughly vetted, highly qualified, and have extensive experience in performing Hindu religious ceremonies. They are well-versed in Sanskrit, Vedic traditions, and have proper knowledge of all rituals."
      },
      {
        question: "Do you provide services outside Delhi and Chandigarh?",
        answer: "Yes, we provide services across major cities in India. For outstation services, additional travel charges may apply. Please mention your location while booking, and we'll confirm availability."
      }
    ]
  },
  {
    category: "Booking & Payment",
    questions: [
      {
        question: "How much advance notice do I need to give for booking?",
        answer: "We recommend booking at least 7 days in advance for regular services and 15-30 days for special occasions like weddings or large celebrations. However, we also accommodate urgent requests based on availability."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including cash, UPI, bank transfers, credit/debit cards, and digital wallets. Payment terms will be discussed and confirmed at the time of booking."
      },
      {
        question: "Do I need to pay the full amount in advance?",
        answer: "Payment terms vary depending on the service. For smaller pujas, full payment may be required. For larger ceremonies, we typically ask for a 30-50% advance with the balance payable on completion."
      },
      {
        question: "Can I get an invoice for the services?",
        answer: "Yes, we provide proper invoices for all our services. This can be useful for tax purposes or record-keeping. Please request an invoice at the time of booking."
      }
    ]
  },
  {
    category: "Service Details",
    questions: [
      {
        question: "What's included in 'Pooja with Samagri'?",
        answer: "When you select 'Pooja with Samagri', we provide all necessary materials including flowers, fruits, sweets, incense, diyas, sacred thread, rice, turmeric, vermillion, and other required items specific to your chosen ceremony."
      },
      {
        question: "How long do different ceremonies typically take?",
        answer: "Duration varies by service: Simple pujas (1-2 hours), Bhagwat Katha (7 days), Wedding ceremonies (4-6 hours), Havan ceremonies (2-5 hours), and Sanskar ceremonies (2-4 hours). Exact timing will be communicated during booking."
      },
      {
        question: "Can ceremonies be customized according to family traditions?",
        answer: "Absolutely! We understand that different families may have specific traditions or preferences. Our pandits are flexible and can adapt ceremonies to honor your family's customs while maintaining ritual authenticity."
      },
      {
        question: "Do you provide English explanations during ceremonies?",
        answer: "Yes, our pandits can explain the significance of rituals and mantras in Hindi or English, making the ceremony more meaningful for all participants, especially younger generations."
      }
    ]
  },
  {
    category: "Practical Information",
    questions: [
      {
        question: "What should I prepare before the pandit arrives?",
        answer: "Please ensure you have a clean, dedicated space for the ceremony, access to water, and if not opting for 'with samagri', arrange the required materials. We'll provide a detailed list of requirements after booking confirmation."
      },
      {
        question: "What if it rains or there are weather issues?",
        answer: "For outdoor ceremonies, we can help rearrange for indoor settings or reschedule if necessary. Weather-related changes don't incur additional charges, and we work with you to find the best solution."
      },
      {
        question: "Can I take photos and videos during the ceremony?",
        answer: "Yes, photography and videography are generally allowed. However, please inform our pandit beforehand, and they'll guide you on appropriate timing that doesn't interrupt the sacred rituals."
      },
      {
        question: "Do you provide services for corporate events?",
        answer: "Yes, we offer office pujas, corporate event blessings, Vastu Shanti for new offices, festival celebrations, and other business-related ceremonies. We understand corporate scheduling needs and can work around your requirements."
      }
    ]
  },
  {
    category: "Cancellation & Changes",
    questions: [
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 7+ days in advance receive full refund, 3-6 days receive 50% refund, and less than 48 hours receive no refund. Special circumstances like medical emergencies are considered on a case-by-case basis."
      },
      {
        question: "Can I reschedule my booking?",
        answer: "Yes, you can reschedule once free of charge if done 48+ hours in advance, subject to pandit availability. The new date must be within 6 months of the original booking."
      },
      {
        question: "What if the pandit cannot make it due to emergency?",
        answer: "In rare cases of pandit unavailability due to emergencies, we'll either arrange a qualified replacement pandit or offer full rescheduling/refund. We maintain backup arrangements to minimize such situations."
      }
    ]
  },
  {
    category: "Technical & App",
    questions: [
      {
        question: "Do you have a mobile app?",
        answer: "Yes, we have mobile apps for both Android and iOS platforms. You can download them to book services, track your ceremonies, make payments, and stay updated with our latest offerings."
      },
      {
        question: "Is my personal information secure?",
        answer: "Absolutely. We use industry-standard security measures to protect your personal information. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data."
      },
      {
        question: "How do I get updates about my booking?",
        answer: "You'll receive SMS and email confirmations for your booking, along with reminders 24 hours before your ceremony. You can also track your booking status through our website or mobile app."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl">🕉️</div>
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services, booking process, and policies.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-700">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-orange-200"
                    >
                      <AccordionTrigger className="text-left hover:text-orange-600 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-orange-100 to-red-100 border-orange-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-orange-700">Still Have Questions?</CardTitle>
            <CardDescription className="text-lg">
              Our customer support team is here to help you with any additional questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Phone Support</h4>
                <p>+91 9310065609</p>
                <p className="text-gray-600">9 AM - 8 PM Daily</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Email Support</h4>
                <p>support@poojariji.in</p>
                <p className="text-gray-600">Response within 4 hours</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">WhatsApp</h4>
                <p>+91 9310065609</p>
                <p className="text-gray-600">Quick support available</p>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/booking">
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  Contact Support
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}