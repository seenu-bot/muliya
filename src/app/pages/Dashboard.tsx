"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  TrendingUp,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const orders = [
  {
    id: "ORD001",
    date: "March 10, 2026",
    items: ["Classic Diamond Solitaire Ring"],
    total: 128750,
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzM4MjI2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ORD002",
    date: "March 5, 2026",
    items: ["Gold Necklace", "Gold Earrings"],
    total: 130000,
    status: "In Transit",
    image: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const wishlistItems = [
  {
    id: "3",
    name: "Traditional Gold Bangles Set",
    price: 165000,
    image: "https://images.unsplash.com/photo-1760786933035-32da5ebb881c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFuZ2xlcyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MzgyMjY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    name: "Gold Pendant with Chain",
    price: 38000,
    image: "https://images.unsplash.com/photo-1771515411694-57fb626159d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGVuZGFudCUyMGNoYWlufGVufDF8fHx8MTc3MzgyMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const goldScheme = {
  monthlyContribution: 10000,
  months: 11,
  totalPaid: 110000,
  bonusAmount: 11000,
  totalValue: 121000,
};

export function Dashboard() {
  const pathname = usePathname();
  const isWishlist = pathname.includes("/wishlist");
  const isOrders = pathname.includes("/orders");

  const [activeTab, setActiveTab] = useState(
    isWishlist ? "wishlist" : isOrders ? "orders" : "profile"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">My Account</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders">
              <Package className="w-4 h-4 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="scheme">
              <TrendingUp className="w-4 h-4 mr-2" />
              Gold Scheme
            </TabsTrigger>
            <TabsTrigger value="addresses">
              <MapPin className="w-4 h-4 mr-2" />
              Addresses
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">First Name</label>
                        <p className="font-medium">Priya</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Last Name</label>
                        <p className="font-medium">Sharma</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Email</label>
                      <p className="font-medium">priya.sharma@example.com</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Phone</label>
                      <p className="font-medium">+91 9876543210</p>
                    </div>
                    <Button className="mt-4">Edit Profile</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Account Stats</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Orders</p>
                      <p className="text-2xl font-semibold">12</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Wishlist Items</p>
                      <p className="text-2xl font-semibold">{wishlistItems.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="text-lg font-medium">January 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Order #{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <Badge
                        variant={
                          order.status === "Delivered" ? "default" : "secondary"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                        <ImageWithFallback
                          src={order.image}
                          alt={order.items[0]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{order.items.join(", ")}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Total: ₹{order.total.toLocaleString()}
                        </p>
                      </div>
                      <Button variant="outline">Track Order</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id}>
                  <div className="aspect-square bg-gray-100">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-amber-700 font-semibold mb-4">
                      ₹{item.price.toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm" asChild>
                        <Link href={`/product/${item.id}`}>View</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gold Scheme Tab */}
          <TabsContent value="scheme">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Gold Savings Scheme</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Monthly Contribution</p>
                    <p className="text-2xl font-semibold text-amber-700">
                      ₹{goldScheme.monthlyContribution.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Months Completed</p>
                    <p className="text-2xl font-semibold text-amber-700">
                      {goldScheme.months}/12
                    </p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Paid</p>
                    <p className="text-2xl font-semibold text-amber-700">
                      ₹{goldScheme.totalPaid.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Value</p>
                    <p className="text-2xl font-semibold text-amber-700">
                      ₹{goldScheme.totalValue.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">
                    <strong>Bonus:</strong> ₹{goldScheme.bonusAmount.toLocaleString()} will
                    be added on scheme completion!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge>Default</Badge>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <h3 className="font-semibold mb-2">Priya Sharma</h3>
                  <p className="text-gray-700 text-sm">
                    123 Jewelry Lane
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    Phone: +91 9876543210
                  </p>
                </CardContent>
              </Card>

              <Card className="border-dashed border-2 flex items-center justify-center">
                <CardContent className="p-6 text-center">
                  <Button variant="outline">Add New Address</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
