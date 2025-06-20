'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Send, Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
//lalit
const services = [
  // Puran Katha
  'Bhagwat Katha', 'Shiv Maha Puran', 'Ram Katha', 'Shrimad Devi Bhagwat Puran',
  // Shanti Pooja
  'Narayanbali Pitrushraddh Vidhi', 'Kaal Sarp Yog', 'Nakshatra Shanti', 'Vastu Shanti', 'Nav Grah Shanti',
  // Havan
  'Marriage Ceremony', 'Shat Chandi Yagna', 'Rudra Havan', 'Sri Suktam Havan', 'Maha Mrityunjay Jap', 'Vishnu Yagna', 'Ganesh Yagna', 'Navchandi Yagna',
  // Sanskar Vidhi
  'Chaul Sanskar', 'Namkaran Sanskar', 'Srimant Sanskar', 'Yagnopavit Sanskar',
  // Sthapan Pooja
  'Ghat Sthapna', 'Rudra Abhishek', 'Laghu Rudra', 'Maha Rudra Pooja', 'Ati Rudra Pooja', 'Murti Pranpratishtha',
  // Festival Pooja
  'Office Pooja', 'Diwali Pooja', 'Navratri Pooja', 'Durga Pooja', 'Lakshmi Pooja', 'Vishwakarma Pooja', 'Ganesh Pooja', 'SatyaNarayan Katha'
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    withSamagri: '',
    address: '',
    details: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Your booking request has been submitted! We will contact you shortly.');
  };

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

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Pooja</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Fill out the form below to book your desired religious ceremony. Our learned pandits will contact you to confirm the details.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Booking Form</CardTitle>
              <CardDescription className="text-lg">
                Please provide your details and we'll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium flex items-center">
                      <User className="h-4 w-4 mr-2 text-orange-600" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-orange-600" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-orange-600" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                    Select Service *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="border-orange-200 focus:border-orange-500">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pooja with Samagri */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Pooja with Samagri (All required materials included) *
                  </Label>
                  <RadioGroup
                    value={formData.withSamagri}
                    onValueChange={(value) => handleInputChange('withSamagri', value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="samagri-yes" />
                      <Label htmlFor="samagri-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="samagri-no" />
                      <Label htmlFor="samagri-no">No</Label>
                    </div>
                  </RadioGroup>
                  <p className="text-sm text-gray-600">
                    Selecting "Yes" includes all necessary pooja materials, flowers, fruits, and other required items.
                  </p>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address where the pooja will be conducted"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                    className="border-orange-200 focus:border-orange-500 min-h-[80px]"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <Label htmlFor="details" className="text-sm font-medium flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-orange-600" />
                    Additional Details
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Please provide any additional information, preferred dates, special requirements, or questions you may have..."
                    value={formData.details}
                    onChange={(e) => handleInputChange('details', e.target.value)}
                    className="border-orange-200 focus:border-orange-500 min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Booking Request
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600 pt-4">
                  <p>
                    Our team will contact you within 24 hours to confirm your booking and discuss the details.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
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
      {/* Contact Information */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl opacity-90">Contact us directly for urgent bookings or queries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-lg">+91 9310065609</p>
              <p>Available 24/7</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-lg">info@poojariji.in</p>
              <p>Response within 4 hours</p>
            </div>
            <div>
              <MessageSquare className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-lg">+91 9310065609</p>
              <p>Quick support available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}