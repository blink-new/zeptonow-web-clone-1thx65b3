import React, { useState } from 'react'
import { Search, Globe, Menu, User, Heart, Star, MapPin, Calendar, Users, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'

function App() {
  const [activeTab, setActiveTab] = useState('stays')
  const [searchLocation, setSearchLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)

  const categories = [
    { name: 'Beachfront', icon: '🏖️' },
    { name: 'Cabins', icon: '🏕️' },
    { name: 'Trending', icon: '🔥' },
    { name: 'Countryside', icon: '🌾' },
    { name: 'Amazing pools', icon: '🏊‍♂️' },
    { name: 'Islands', icon: '🏝️' },
    { name: 'National parks', icon: '🏞️' },
    { name: 'Tiny homes', icon: '🏠' },
    { name: 'Lakefront', icon: '🏞️' },
    { name: 'Design', icon: '🎨' },
    { name: 'Skiing', icon: '⛷️' },
    { name: 'Castles', icon: '🏰' }
  ]

  const properties = [
    {
      id: 1,
      images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'],
      title: 'Entire villa in Santorini, Greece',
      type: 'Entire villa',
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      price: 245,
      rating: 4.95,
      reviews: 127,
      host: 'Superhost',
      distance: '2,341 kilometers away',
      dates: 'Nov 1-6'
    },
    {
      id: 2,
      images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'],
      title: 'Cozy cabin in Aspen, Colorado',
      type: 'Entire cabin',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 189,
      rating: 4.87,
      reviews: 89,
      host: 'Superhost',
      distance: '1,234 kilometers away',
      dates: 'Nov 3-8'
    },
    {
      id: 3,
      images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'],
      title: 'Modern apartment in Tokyo, Japan',
      type: 'Entire apartment',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 156,
      rating: 4.92,
      reviews: 203,
      host: 'Superhost',
      distance: '8,567 kilometers away',
      dates: 'Nov 5-10'
    },
    {
      id: 4,
      images: ['https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop'],
      title: 'Beachfront house in Malibu, California',
      type: 'Entire house',
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      price: 425,
      rating: 4.98,
      reviews: 156,
      host: 'Superhost',
      distance: '456 kilometers away',
      dates: 'Nov 2-7'
    },
    {
      id: 5,
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'],
      title: 'Luxury loft in New York City',
      type: 'Entire loft',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 312,
      rating: 4.89,
      reviews: 94,
      host: 'Superhost',
      distance: '789 kilometers away',
      dates: 'Nov 4-9'
    },
    {
      id: 6,
      images: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'],
      title: 'Charming cottage in Cotswolds, England',
      type: 'Entire cottage',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 134,
      rating: 4.94,
      reviews: 78,
      host: 'Superhost',
      distance: '3,456 kilometers away',
      dates: 'Nov 6-11'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                <span className="text-primary">airbnb</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 p-2">
              <div className="flex items-center px-4 py-2 border-r border-gray-300">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Where</div>
                  <input 
                    type="text" 
                    placeholder="Search destinations" 
                    className="text-gray-500 bg-transparent border-none outline-none w-32"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center px-4 py-2 border-r border-gray-300">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Check in</div>
                  <input 
                    type="text" 
                    placeholder="Add dates" 
                    className="text-gray-500 bg-transparent border-none outline-none w-20"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center px-4 py-2 border-r border-gray-300">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Check out</div>
                  <input 
                    type="text" 
                    placeholder="Add dates" 
                    className="text-gray-500 bg-transparent border-none outline-none w-20"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center px-4 py-2">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Who</div>
                  <input 
                    type="text" 
                    placeholder="Add guests" 
                    className="text-gray-500 bg-transparent border-none outline-none w-20"
                    value={guests > 1 ? `${guests} guests` : 'Add guests'}
                    readOnly
                  />
                </div>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full p-2 ml-2">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:flex items-center text-sm font-medium">
                Airbnb your home
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Globe className="h-4 w-4" />
              </Button>
              <div className="flex items-center border border-gray-300 rounded-full p-1 hover:shadow-md transition-shadow">
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8 overflow-x-auto">
              {categories.map((category, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 cursor-pointer hover:text-gray-900 transition-colors min-w-0 flex-shrink-0">
                  <div className="text-2xl">{category.icon}</div>
                  <span className="text-xs font-medium text-gray-600 whitespace-nowrap">{category.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4 ml-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="property-card border-none shadow-none hover:shadow-lg transition-all duration-200 cursor-pointer">
              <CardContent className="p-0">
                {/* Property Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <img 
                    src={property.images[0]} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {property.host === 'Superhost' && (
                    <Badge className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-medium">
                      Superhost
                    </Badge>
                  )}
                </div>

                {/* Property Details */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 truncate">{property.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{property.distance}</p>
                  <p className="text-sm text-gray-600">{property.dates}</p>
                  
                  <div className="flex items-baseline space-x-1 pt-1">
                    <span className="font-semibold text-gray-900">${property.price}</span>
                    <span className="text-sm text-gray-600">night</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Show more
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">AirCover</a></li>
                <li><a href="#" className="hover:text-gray-900">Anti-discrimination</a></li>
                <li><a href="#" className="hover:text-gray-900">Disability support</a></li>
                <li><a href="#" className="hover:text-gray-900">Cancellation options</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Airbnb your home</a></li>
                <li><a href="#" className="hover:text-gray-900">AirCover for Hosts</a></li>
                <li><a href="#" className="hover:text-gray-900">Hosting resources</a></li>
                <li><a href="#" className="hover:text-gray-900">Community forum</a></li>
                <li><a href="#" className="hover:text-gray-900">Hosting responsibly</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Newsroom</a></li>
                <li><a href="#" className="hover:text-gray-900">New features</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Investors</a></li>
                <li><a href="#" className="hover:text-gray-900">Gift cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Sitemap</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>© 2024 Airbnb, Inc.</span>
              <span>·</span>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-900">Sitemap</a>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">English (US)</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-sm">
                $ USD
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App