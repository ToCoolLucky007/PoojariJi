'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { serviceData } from '@/lib/all-service-paths-data';

export default function ServiceCategory({ category }: { category: string }) {
    const service = serviceData[category as keyof typeof serviceData];

    if (!service) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
                    <Link href="/">
                        <Button>Return Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        // ... same JSX you already have ...
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
            <section className={`py-20 bg-gradient-to-r ${service.color} text-white`}>
                <div className="container mx-auto px-4 text-center">
                    <div className="text-8xl mb-6">{service.icon}</div>
                    <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Available Services</h2>
                        <p className="text-xl text-gray-600">
                            Choose from our authentic and traditional {service.title.toLowerCase()} services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.subcategories.map((subcategory) => (
                            <Card key={subcategory.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={subcategory.image}
                                        alt={subcategory.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-800">{subcategory.name}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {subcategory.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {subcategory.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="h-4 w-4 mr-1" />
                                            {subcategory.participants}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                                            <Star className="h-3 w-3 mr-1" />
                                            Premium Service
                                        </Badge>
                                        <Link href={`/services/${category}/${subcategory.id}`}>
                                            <Button size="sm" className={`bg-gradient-to-r ${service.color} from-orange-700 hover:to-red-700`}>
                                                Learn More
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
