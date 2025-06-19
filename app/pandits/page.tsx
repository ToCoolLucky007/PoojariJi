import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Download, Star, MapPin, Languages, Award, Calendar, CheckCircle } from 'lucide-react';
// import { MapPin, Download, Star, Clock, Users, Award } from 'lucide-react';
export default function Pandits() {

  const pandits = [
    {
      name: "Pandit Rajesh Sharma",
      image: "/images/pandit/pandit1.png",
      specialization: "Vedic Astrology & Karma Kand",
      experience: "25+ Years",
      rating: 4.9,
      reviews: 1247,
      languages: ["Hindi", "English", "Sanskrit"],
      location: "Varanasi, UP",
      verified: true,
      available: true
    },
    {
      name: "Pandit Suresh Mishra",
      image: "/images/pandit/pandit2.png",
      specialization: "Marriage Ceremonies & Rituals",
      experience: "20+ Years",
      rating: 4.8,
      reviews: 892,
      languages: ["Hindi", "English", "Bengali"],
      location: "Kolkata, WB",
      verified: true,
      available: false
    },
    {
      name: "Pandit Arun Joshi",
      image: "/images/pandit/pandit3.png",
      specialization: "Puja Services & Festivals",
      experience: "15+ Years",
      rating: 4.9,
      reviews: 634,
      languages: ["Hindi", "English", "Gujarati"],
      location: "Ahmedabad, GJ",
      verified: true,
      available: true
    },
    {
      name: "Pandit Vikram Pandey",
      image: "/images/pandit/pandit4.png",
      specialization: "Spiritual Counseling",
      experience: "18+ Years",
      rating: 4.7,
      reviews: 456,
      languages: ["Hindi", "English", "Marathi"],
      location: "Pune, MH",
      verified: true,
      available: true
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



      <section id="pandits" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-800">Meet Our </span>
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Expert Pandits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our carefully selected team of learned pandits brings decades of experience
              and authentic knowledge to guide you through your spiritual journey.
            </p>
          </div>

          {/* Pandits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pandits.map((pandit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105">
                {/* Image */}
                <div className="relative">
                  <img
                    src={pandit.image}
                    alt={pandit.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {pandit.verified && (
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                        <CheckCircle size={12} />
                        <span>Verified</span>
                      </div>
                    )}
                    <div className={`px-2 py-1 rounded-full text-xs ${pandit.available
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                      }`}>
                      {pandit.available ? 'Available' : 'Busy'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pandit.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{pandit.specialization}</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{pandit.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({pandit.reviews} reviews)</span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award size={14} className="mr-2" />
                      <span>{pandit.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={14} className="mr-2" />
                      <span>{pandit.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Languages size={14} className="mr-2" />
                      <span>{pandit.languages.join(', ')}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">

                    <Link href={pandit.available ? '/booking' : '#'} >
                      <button
                        className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${pandit.available
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transform hover:scale-105'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        disabled={!pandit.available}
                      >
                        {pandit.available ? 'Book Now' : 'Not Available'}
                      </button>
                    </Link>
                    {/* <button className="px-4 py-2 border border-orange-500 text-orange-600 rounded-full text-sm hover:bg-orange-50 transition-colors">
                      View Profile
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Certified Pandits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-600">States Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">Service Types</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
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