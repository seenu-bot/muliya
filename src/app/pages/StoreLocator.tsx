import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const stores = [
  {
    id: 1,
    name: "Muliya Flagship Store - Mumbai",
    address: "123 Jewelry Lane, Fort, Mumbai, Maharashtra 400001",
    phone: "+91 9876543210",
    hours: "Mon-Sun: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzczODIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Muliya - Andheri",
    address: "456 Gold Plaza, Andheri West, Mumbai, Maharashtra 400053",
    phone: "+91 9876543211",
    hours: "Mon-Sun: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzczODIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Muliya - Pune",
    address: "789 MG Road, Pune, Maharashtra 411001",
    phone: "+91 9876543212",
    hours: "Mon-Sun: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzczODIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Muliya - Delhi",
    address: "321 Connaught Place, New Delhi, Delhi 110001",
    phone: "+91 9876543213",
    hours: "Mon-Sun: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzczODIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Muliya - Ahmedabad",
    address: "555 CG Road, Ahmedabad, Gujarat 380009",
    phone: "+91 9876543214",
    hours: "Mon-Sun: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzczODIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "Muliya - Bangalore",
    address: "888 Brigade Road, Bangalore, Karnataka 560025",
    phone: "+91 9876543215",
    hours: "Mon-Sun: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzczODIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function StoreLocator() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Find a Store</h1>
          <p className="text-xl opacity-90">
            Visit us at any of our 15 locations across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex gap-4">
            <Input
              type="search"
              placeholder="Search by city or pincode..."
              className="flex-1"
            />
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Navigation className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-12 overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map</p>
              <p className="text-sm">
                Google Maps integration would be displayed here in production
              </p>
            </div>
          </div>
        </Card>

        {/* Store List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <Card key={store.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {store.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{store.address}</p>
                  </div>

                  <div className="flex gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <p className="text-sm">{store.phone}</p>
                  </div>

                  <div className="flex gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <p className="text-sm">{store.hours}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline" size="sm">
                    Get Directions
                  </Button>
                  <Button className="flex-1" size="sm">
                    Call Store
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-12 bg-gradient-to-r from-amber-600 to-amber-500 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif mb-4">Can't find a store near you?</h2>
            <p className="mb-6 opacity-90">
              Shop online and get your jewelry delivered to your doorstep with free
              shipping on orders above ₹50,000
            </p>
            <Button variant="secondary" size="lg">
              Shop Online
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
