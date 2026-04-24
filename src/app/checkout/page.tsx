"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/data/collections";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useRazorpay } from "react-razorpay";
import { 
  ChevronLeft, 
  CreditCard, 
  Truck, 
  MapPin, 
  User,
  Phone,
  Mail,
  CheckCircle2,
  Package
} from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");
  const { Razorpay } = useRazorpay();
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  if (items.length === 0 && step !== "confirmation") {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-serif text-gray-900 mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some items to proceed to checkout.</p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-[#E92247] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d11f3f] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handleRazorpayPayment = () => {
    if (!Razorpay) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: "rzp_test_6lyQTyrcSZUJgZ", // Enter the Key ID generated from the Dashboard
      amount: Math.round(totalPrice * 100), // Amount is in currency subunits (paise)
      currency: "INR" as const,
      name: "Muliya Jewellery",
      description: "Jewellery Purchase",
      image: "/images/Logo-1.svg",
      order_id: "order_" + Date.now(), // Generate a mock order ID for TypeScript compliance
      handler: async function (response: { razorpay_payment_id: string; razorpay_order_id?: string; razorpay_signature?: string }) {
        console.log(response);
        
        // Create order data
        const orderData = {
          userId: "guest",
          shippingDetails,
          items: items.map((item) => ({
            productId: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          totalAmount: totalPrice,
          delivery: "Card",
          paymentStatus: "Confirmed",
          razorpay_payment_id: response.razorpay_payment_id,
        };

        console.log("Order placed:", orderData);
        
        setIsProcessing(false);
        setStep("confirmation");
        clearCart();
        toast.success("Payment successful! Order placed.");
      },
      prefill: {
        name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
        email: shippingDetails.email,
        contact: shippingDetails.phone,
      },
      notes: `${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.state} - ${shippingDetails.pincode}`,
      theme: {
        color: "#E92247",
      },
    };

    const rzp = new Razorpay(options);
    
    rzp.on("payment.failed", function (response: { error: { description: string } }) {
      toast.error(`Payment failed: ${response.error.description}`);
      setIsProcessing(false);
    });

    rzp.open();
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === "card") {
      setIsProcessing(true);
      handleRazorpayPayment();
    } else {
      // Cash on Delivery
      setIsProcessing(true);
      
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsProcessing(false);
      setStep("confirmation");
      clearCart();
      toast.success("Order placed successfully!");
    }
  };

  if (step === "confirmation") {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-serif text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your purchase. Your order has been placed successfully.
              You will receive an email confirmation shortly.
            </p>
            <div className="space-y-3">
              <Link
                href="/collections"
                className="block w-full bg-[#E92247] text-white py-3 rounded-lg font-medium hover:bg-[#d11f3f] transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/cart" className="flex items-center gap-1 hover:text-[#E92247] transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Back to Cart
            </Link>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${step === "shipping" ? "text-[#E92247]" : "text-green-600"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "shipping" ? "bg-[#E92247] text-white" : "bg-green-100"}`}>
                <Truck className="w-4 h-4" />
              </div>
              <span className="font-medium hidden sm:inline">Shipping</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-200" />
            <div className={`flex items-center gap-2 ${step === "payment" ? "text-[#E92247]" : "text-gray-400"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "payment" ? "bg-[#E92247] text-white" : "bg-gray-100"}`}>
                <CreditCard className="w-4 h-4" />
              </div>
              <span className="font-medium hidden sm:inline">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "shipping" ? (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-serif text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#E92247]" />
                  Shipping Details
                </h2>
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={shippingDetails.firstName}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, firstName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingDetails.lastName}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={shippingDetails.email}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={shippingDetails.phone}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={shippingDetails.address}
                      onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none resize-none"
                      placeholder="Enter your full address"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingDetails.city}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                        placeholder="Mumbai"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingDetails.state}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, state: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                        placeholder="Maharashtra"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingDetails.pincode}
                        onChange={(e) => setShippingDetails({ ...shippingDetails, pincode: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                        placeholder="400001"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E92247] text-white py-4 rounded-lg font-medium hover:bg-[#d11f3f] transition-colors mt-6"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-serif text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#E92247]" />
                  Payment Method
                </h2>
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center gap-3 mb-4">
                      <input
                        type="radio"
                        name="payment"
                        id="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="w-4 h-4 text-[#E92247]"
                      />
                      <label htmlFor="cod" className="font-medium text-gray-900">
                        Cash on Delivery (COD)
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      Pay with cash when your order is delivered.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <input
                        type="radio"
                        name="payment"
                        id="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="w-4 h-4 text-[#E92247]"
                      />
                      <label htmlFor="card" className="font-medium text-gray-900">
                        Credit/Debit Card (Razorpay)
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      Pay securely using Razorpay payment gateway.
                    </p>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep("shipping")}
                      className="flex-1 border border-gray-300 text-gray-700 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-[#E92247] text-white py-4 rounded-lg font-medium hover:bg-[#d11f3f] transition-colors disabled:opacity-50"
                    >
                      {isProcessing ? "Processing..." : paymentMethod === "card" ? `Pay ${formatPrice(totalPrice)}` : "Place Order"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-serif text-gray-900 mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm text-[#E92247] font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span className="text-[#E92247]">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
