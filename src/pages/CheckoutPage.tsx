import { FC, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { BillingDetails } from "@/types";
import { useCart } from "@/contexts/CartContext";

export const CheckoutPage: FC = () => {
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");

  const [couponCode, setCouponCode] = useState("");

  const { items, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = 0;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Order placed:", {
      billingDetails,
      paymentMethod,
      items,
      subtotal,
      total,
    });
    alert("Order placed successfully!");
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <span>/</span>
          <a href="/cart" className="hover:text-black">
            Cart
          </a>
          <span>/</span>
          <span className="text-black">CheckOut</span>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl font-semibold mb-8">Billing Details</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Input
                  label="First Name*"
                  type="text"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  label="Company Name"
                  type="text"
                  name="companyName"
                  value={billingDetails.companyName}
                  onChange={handleInputChange}
                />

                <Input
                  label="Street Address*"
                  type="text"
                  name="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  label="Apartment, floor, etc. (optional)"
                  type="text"
                  name="apartment"
                  value={billingDetails.apartment}
                  onChange={handleInputChange}
                />

                <Input
                  label="Town/City*"
                  type="text"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  label="Phone Number*"
                  type="tel"
                  name="phone"
                  value={billingDetails.phone}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  label="Email Address*"
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleInputChange}
                  required
                />

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={billingDetails.saveInfo}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-accent border-neutral-300 rounded focus:ring-accent"
                  />
                  <span className="text-sm">
                    Save this information for faster check-out next time
                  </span>
                </label>
              </div>

              <div>
                <div className="space-y-4 mb-6">
                  {items.length === 0 ? (
                    <div className="text-sm text-neutral-500">
                      Your cart is empty.
                    </div>
                  ) : (
                    items.map((item) => (
                      <div
                        key={`${item.product.id}-${item.selectedColor || ""}-${
                          item.selectedSize || ""
                        }`}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <span className="text-sm">{item.product.name}</span>
                            {item.quantity > 1 && (
                              <div className="text-xs text-neutral-500">
                                Qty: {item.quantity}
                              </div>
                            )}
                          </div>
                        </div>
                        <span className="font-medium">
                          ${item.product.price * item.quantity}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                <div className="space-y-4 py-6 border-y border-neutral-200">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="text-success font-medium">Free</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold mb-4">Payment Method</h3>

                  <label className="flex items-center justify-between cursor-pointer p-4 border border-neutral-300 rounded hover:border-black transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value as "card")
                        }
                        className="w-4 h-4 text-accent"
                      />
                      <span>Bank</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-auto"
                        aria-label="Card icon"
                        role="img"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="22"
                          height="16"
                          rx="2"
                          fill="#1f2937"
                        />
                        <rect
                          x="2"
                          y="8"
                          width="20"
                          height="3"
                          rx="1"
                          fill="#fff"
                          opacity="0.9"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-auto"
                        aria-label="Two circles icon"
                        role="img"
                      >
                        <circle cx="9" cy="12" r="5" fill="#f97316" />
                        <circle
                          cx="15"
                          cy="12"
                          r="5"
                          fill="#ef4444"
                          opacity="0.95"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-auto"
                        aria-label="Paypal-like icon"
                        role="img"
                      >
                        <path
                          d="M6 6h8l-1 4h-6z"
                          fill="#003087"
                          opacity="0.9"
                        />
                        <path
                          d="M9 10h6l-1 6H8z"
                          fill="#009cde"
                          opacity="0.9"
                        />
                      </svg>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-4 border border-neutral-300 rounded hover:border-black transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as "cod")
                      }
                      className="w-4 h-4 text-accent"
                    />
                    <span>Cash on delivery</span>
                  </label>
                </div>

                <div className="mt-6 flex gap-4">
                  <Input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="primary" type="button">
                    Apply Coupon
                  </Button>
                </div>

                <div className="mt-6">
                  <Button type="submit" variant="primary" fullWidth>
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
