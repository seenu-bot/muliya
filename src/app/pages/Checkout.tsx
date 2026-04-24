"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CreditCard, MapPin, User, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { toast } from "sonner";

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

export function Checkout() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const cartItems = [
    {
      name: "Classic Diamond Solitaire Ring",
      quantity: 1,
      price: 125000,
    },
    {
      name: "Elegant Gold Chain Necklace",
      quantity: 1,
      price: 85000,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.03;
  const total = subtotal + shipping + tax;

  const onSubmit = (data: CheckoutFormData) => {
    if (step === 1) {
      setStep(2);
    } else {
      // Process payment
      toast.success("Order placed successfully!");
      setTimeout(() => {
        router.push("/dashboard/orders");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-amber-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step > 1 ? <Check className="w-5 h-5" /> : "1"}
              </div>
              <span className="ml-2 font-medium">Shipping</span>
            </div>
            <div className="w-24 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-amber-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                2
              </div>
              <span className="ml-2 font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <h2 className="text-xl font-semibold">Shipping Information</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            {...register("firstName", {
                              required: "First name is required",
                            })}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            {...register("lastName", {
                              required: "Last name is required",
                            })}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          {...register("phone", {
                            required: "Phone number is required",
                          })}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          {...register("address", {
                            required: "Address is required",
                          })}
                          className={errors.address ? "border-red-500" : ""}
                        />
                        {errors.address && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.address.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            {...register("city", { required: "City is required" })}
                            className={errors.city ? "border-red-500" : ""}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            {...register("state", { required: "State is required" })}
                            className={errors.state ? "border-red-500" : ""}
                          />
                        </div>
                        <div>
                          <Label htmlFor="pincode">Pincode *</Label>
                          <Input
                            id="pincode"
                            {...register("pincode", {
                              required: "Pincode is required",
                            })}
                            className={errors.pincode ? "border-red-500" : ""}
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full mt-6 bg-amber-600 hover:bg-amber-700"
                    >
                      Continue to Payment
                    </Button>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <CreditCard className="w-5 h-5 text-amber-600" />
                      <h2 className="text-xl font-semibold">Payment Method</h2>
                    </div>

                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="flex-1 cursor-pointer">
                            UPI
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="netbanking" id="netbanking" />
                          <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                            Net Banking
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            Cash on Delivery
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" type="password" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "upi" && (
                      <div className="mt-6">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input id="upiId" placeholder="yourname@upi" />
                      </div>
                    )}

                    <div className="flex gap-4 mt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-amber-600 hover:bg-amber-700"
                      >
                        Place Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        {item.name} x {item.quantity}
                      </span>
                      <span>₹{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (3%)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-amber-700">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                  <p className="font-medium mb-1">Secure Payment</p>
                  <p className="text-xs">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
