import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Download, Star, MapPin, Quote, Languages, Award, Calendar, CheckCircle } from 'lucide-react';
// import { MapPin, Download, Star, Clock, Users, Award } from 'lucide-react';
export default function Pandits() {

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "The online consultation was incredibly helpful. Pandit ji provided excellent guidance for my daughter's wedding ceremony. The entire process was smooth and authentic.",
      service: "Wedding Consultation"
    },
    {
      name: "Rahul Gupta",
      location: "Delhi, NCR",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "Amazing service! The Griha Pravesh ceremony was conducted perfectly. The pandit was knowledgeable and made the whole experience very meaningful for our family.",
      service: "Griha Pravesh Ceremony"
    },
    {
      name: "Anjali Patel",
      location: "Ahmedabad, Gujarat",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "Excellent platform for spiritual guidance. The astrological consultation helped me understand my life path better. Highly recommend their services.",
      service: "Vedic Consultation"
    },
    {
      name: "Vikash Kumar",
      location: "Patna, Bihar",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "Professional and authentic service. The naming ceremony for our newborn was beautifully conducted online with proper rituals and mantras.",
      service: "Naming Ceremony"
    },
    {
      name: "Meera Reddy",
      location: "Hyderabad, Telangana",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "The festival puja service was outstanding. Despite being online, it felt like having a pandit at home. Very satisfied with the experience.",
      service: "Festival Puja"
    },
    {
      name: "Suresh Iyer",
      location: "Chennai, Tamil Nadu",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "Exceptional service quality and very knowledgeable pandits. The spiritual counseling session was exactly what I needed during difficult times.",
      service: "Spiritual Counseling"
    }
  ];

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



      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-800">What Our </span>
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Devotees Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from thousands of satisfied families who have experienced our authentic
              spiritual services and found peace, guidance, and blessings.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group hover:transform hover:scale-105">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-orange-600 font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Trusted by 10,000+ Families</h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied devotees who have found spiritual guidance,
              peace, and authentic religious services through our platform.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-orange-100">Happy Families</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25K+</div>
                <div className="text-orange-100">Ceremonies Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9⭐</div>
                <div className="text-orange-100">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-orange-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Download Our Mobile App</h2>
          <p className="text-xl mb-8 opacity-90">
            Book pujas, track your ceremonies, and connect with pandits on the go
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p>+91 9310065609</p>

            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p>info@pujaariji.in</p>

            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p>9th Floor, Tricity Trade Tower </p>
              <p>Zirakpur, Punjab 140603</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🕉️</div>
                <h3 className="text-xl font-bold">Pujaari Ji</h3>
              </div>
              <p className="text-gray-400">
                Authentic Hindu religious services with traditional wisdom and modern convenience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li> <Link href="/pandits" className="hover:text-yellow-300 transition-colors">Our Pandits</Link></li>
                <li> <Link href="/reviews" className="hover:text-yellow-300 transition-colors">Reviews</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/puran-katha" className="hover:text-white transition-colors">Puran Katha</Link></li>
                <li><Link href="/services/shanti-puja" className="hover:text-white transition-colors">Shanti Puja</Link></li>
                <li><Link href="/services/havan" className="hover:text-white transition-colors">Havan</Link></li>
                <li><Link href="/services/sanskar-vidhi" className="hover:text-white transition-colors">Sanskar Vidhi</Link></li>
                <li><Link href="/services/sthapan-puja" className="hover:text-white transition-colors">Sthapan Puja</Link></li>
                <li><Link href="/services/festival-puja" className="hover:text-white transition-colors">Festival Puja</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PujaariJi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}