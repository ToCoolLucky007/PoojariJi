'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Download, Star, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 'puran-katha',
    title: 'Puran Katha',
    description: 'Sacred narration of ancient Hindu scriptures',
    icon: '📖',
    subcategories: [
      'Bhagwat Katha',
      'Shiv Maha Puran',
      'Ram Katha',
      'Shrimad Devi Bhagwat Puran'
    ]
  },
  {
    id: 'shanti-puja',
    title: 'Shanti Puja',
    description: 'Peace ceremonies for spiritual harmony',
    icon: '🕉️',
    subcategories: [
      'Narayanbali Pitrushraddh Vidhi',
      'Kaal Sarp Yog',
      'Nakshatra Shanti',
      'Vastu Shanti',
      'Nav Grah Shanti'
    ]
  },
  {
    id: 'havan',
    title: 'Havan',
    description: 'Sacred fire ceremonies and rituals',
    icon: '🔥',
    subcategories: [
      'Marriage Ceremony',
      'Shat Chandi Yagna',
      'Rudra Havan',
      'Sri Suktam Havan',
      'Maha Mrityunjay Jap',
      'Vishnu Yagna',
      'Ganesh Yagna',
      'Navchandi Yagna'
    ]
  },
  {
    id: 'sanskar-vidhi',
    title: 'Sanskar Vidhi',
    description: 'Traditional life ceremony rituals',
    icon: '🙏',
    subcategories: [
      'Chaul Sanskar',
      'Namkaran Sanskar',
      'Srimant Sanskar',
      'Yagnopavit Sanskar'
    ]
  },
  {
    id: 'sthapan-puja',
    title: 'Sthapan Puja',
    description: 'Installation and establishment ceremonies',
    icon: '🏛️',
    subcategories: [
      'Ghat Sthapna',
      'Rudra Abhishek',
      'Laghu Rudra',
      'Maha Rudra Pooja',
      'Ati Rudra Pooja',
      'Murti Pranpratishtha'
    ]
  },
  {
    id: 'festival-puja',
    title: 'Festival Puja',
    description: 'Traditional festival celebrations',
    icon: '🎉',
    subcategories: [
      'Office Puja',
      'Diwali Puja',
      'Navratri Puja',
      'Durga Puja',
      'Lakshmi Puja',
      'Vishwakarma Puja',
      'Ganesh Puja',
      'SatyaNarayan Katha'
    ]
  }
];

const stats = [
  { icon: Users, label: 'Happy Devotees', value: '50,000+' },
  { icon: Award, label: 'Years Experience', value: '25+' },
  { icon: Star, label: 'Successful Pujas', value: '10,000+' },
  { icon: Clock, label: '24/7 Available', value: 'Always' }
];

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🕉️</div>
              <h1 className="text-xl font-bold">Pujaari Ji</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
              <div className="relative group">
                <button className="hover:text-yellow-300 transition-colors">Services</button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className="block px-3 py-2 rounded hover:bg-orange-100 transition-colors"
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/pandits" className="hover:text-yellow-300 transition-colors">Our Pandits</Link>
              <Link href="/reviews" className="hover:text-yellow-300 transition-colors">Reviews</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 9310065609</span>
              </div>
              <Link

                href={`/booking`}

              >
                <Button variant="secondary" size="sm">
                  Book Now
                </Button></Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-yellow-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Sacred Rituals for
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Divine Blessings</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience authentic Hindu rituals and ceremonies performed by learned pandits.
              Bringing traditional wisdom to modern times with complete devotion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  Book a Puja
                </Button>
              </Link>
              <Link href="#download">
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Download App
                </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Sacred Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive religious services performed with utmost devotion and traditional authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm ${hoveredService === service.id ? 'ring-2 ring-orange-500' : ''

                  }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-800 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.subcategories.slice(0, 3).map((sub, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {sub}
                      </div>
                    ))}
                    {service.subcategories.length > 3 && (
                      <div className="text-sm text-orange-600 font-medium">
                        +{service.subcategories.length - 3} more services
                      </div>
                    )}
                  </div>
                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                      View Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white">
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