"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  weight: string;
  purity: string;
}

const initialCart: CartItem[] = [
  {
    id: "1",
    name: "Classic Diamond Solitaire Ring",
    category: "Rings",
    price: 125000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzM4MjI2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "3.5g",
    purity: "18K",
  },
  {
    id: "2",
    name: "Elegant Gold Chain Necklace",
    category: "Necklaces",
    price: 85000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1755151606128-7ca2f97e46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MzgyMjY5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    weight: "12.5g",
    purity: "22K",
  },
];

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      toast.success("Coupon applied successfully!");
      setCouponCode("");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50000 ? 0 : 500;
  const tax = subtotal * 0.03; // 3% tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-serif text-gray-900 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">
            Add some beautiful jewelry to your cart
          </p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <Link
                      href={`/product/${item.id}`}
                      className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-100"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            href={`/product/${item.id}`}
                            className="text-lg font-semibold text-gray-900 hover:text-amber-600"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.category} • {item.weight} • {item.purity}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-5 h-5 text-red-600" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="text-xl font-semibold text-amber-700">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹{item.price.toLocaleString()} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                {/* Coupon */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button onClick={applyCoupon} variant="outline">
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${shipping.toLocaleString()}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (3%)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-amber-700">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <p className="text-xs text-gray-600 text-center mt-4">
                  Free shipping on orders above ₹50,000
                </p>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">We Accept</h3>
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-600">
                  <div className="border rounded p-2 text-center">UPI</div>
                  <div className="border rounded p-2 text-center">Card</div>
                  <div className="border rounded p-2 text-center">Net Banking</div>
                  <div className="border rounded p-2 text-center">Wallet</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
