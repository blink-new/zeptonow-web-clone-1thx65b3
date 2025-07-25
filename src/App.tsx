import { useState } from 'react'
import { Plane, Hotel, Train, MapPin, Calendar, Users, Search, Menu, User, ChevronDown } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent } from './components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Badge } from './components/ui/badge'

function App() {
  const [activeTab, setActiveTab] = useState('flights')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">MakeMyTrip</div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Flights</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Hotels</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Trains</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Holidays</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Buses</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Cabs</a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Login or Create Account</span>
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Where do you want to go?
            </h1>
            <p className="text-xl text-blue-100">
              Book flights, hotels, trains & holiday packages
            </p>
          </div>

          {/* Search Tabs */}
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm">
                <TabsTrigger value="flights" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-blue-700">
                  <Plane className="h-4 w-4" />
                  <span>Flights</span>
                </TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-blue-700">
                  <Hotel className="h-4 w-4" />
                  <span>Hotels</span>
                </TabsTrigger>
                <TabsTrigger value="trains" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-blue-700">
                  <Train className="h-4 w-4" />
                  <span>Trains</span>
                </TabsTrigger>
                <TabsTrigger value="holidays" className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-blue-700">
                  <MapPin className="h-4 w-4" />
                  <span>Holidays</span>
                </TabsTrigger>
              </TabsList>

              {/* Flight Search Form */}
              <TabsContent value="flights" className="mt-6">
                <Card className="bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-white">One Way</Badge>
                      <Badge variant="secondary">Round Trip</Badge>
                      <Badge variant="secondary">Multi City</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Delhi" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Mumbai" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Select Date" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Travellers & Class</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="1 Traveller, Economy" 
                            className="pl-10 h-12"
                            readOnly
                          />
                          <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="flex items-end">
                        <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Hotel Search Form */}
              <TabsContent value="hotels" className="mt-6">
                <Card className="bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">City, Property Name</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Goa" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Select Date" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Select Date" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-end">
                        <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Train Search Form */}
              <TabsContent value="trains" className="mt-6">
                <Card className="bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <div className="relative">
                          <Train className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="New Delhi" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <div className="relative">
                          <Train className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Mumbai" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Select Date" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-end">
                        <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Holiday Search Form */}
              <TabsContent value="holidays" className="mt-6">
                <Card className="bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Delhi" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Goa" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Select Date" 
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-end">
                        <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-gray-600">Discover amazing places around the world</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop', price: '₹8,999' },
              { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop', price: '₹24,999' },
              { name: 'Thailand', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', price: '₹18,999' },
              { name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop', price: '₹22,999' }
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <p className="text-sm">Starting from {destination.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MakeMyTrip?</h2>
            <p className="text-gray-600">Your trusted travel partner for over 20 years</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane className="h-8 w-8 text-primary" />,
                title: 'Best Flight Deals',
                description: 'Compare prices from 450+ airlines and get the best deals on domestic and international flights.'
              },
              {
                icon: <Hotel className="h-8 w-8 text-primary" />,
                title: 'Verified Hotels',
                description: 'Choose from 1M+ hotels worldwide with genuine reviews and photos from real travelers.'
              },
              {
                icon: <MapPin className="h-8 w-8 text-primary" />,
                title: '24/7 Support',
                description: 'Get round-the-clock assistance for all your travel needs with our dedicated support team.'
              }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MakeMyTrip</h3>
              <p className="text-gray-400 mb-4">
                India's leading travel company, providing comprehensive travel solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Flights</a></li>
                <li><a href="#" className="hover:text-white">Hotels</a></li>
                <li><a href="#" className="hover:text-white">Trains</a></li>
                <li><a href="#" className="hover:text-white">Holidays</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Customer Care</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Cancellation</a></li>
                <li><a href="#" className="hover:text-white">Refund</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MakeMyTrip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App