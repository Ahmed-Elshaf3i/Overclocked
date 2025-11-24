import { FC, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { BillingDetails } from '@/types';

// CheckoutPage component - Billing and payment page
export const CheckoutPage: FC = () => {
  // Billing form state
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
    saveInfo: false,
  });
  
  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  
  // Coupon code state
  const [couponCode, setCouponCode] = useState('');
  
  // Mock cart items for summary
  const cartItems = [
    {
      id: '1',
      name: 'LCD Monitor',
      price: 650,
      image: 'https://via.placeholder.com/60x60?text=Monitor',
    },
    {
      id: '2',
      name: 'H1 Gamepad',
      price: 1100,
      image: 'https://via.placeholder.com/60x60?text=Gamepad',
    },
  ];
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free
  const total = subtotal + shipping;
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Order placed:', { billingDetails, paymentMethod });
    alert('Order placed successfully!');
    // In real app: send to API
  };
  
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black">Home</a>
          <span>/</span>
          <a href="/cart" className="hover:text-black">Cart</a>
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
              {/* Billing Form - Left Side */}
              <div className="space-y-6">
                {/* First Name */}
                <Input
                  label="First Name*"
                  type="text"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={handleInputChange}
                  required
                />
                
                {/* Company Name */}
                <Input
                  label="Company Name"
                  type="text"
                  name="companyName"
                  value={billingDetails.companyName}
                  onChange={handleInputChange}
                />
                
                {/* Street Address */}
                <Input
                  label="Street Address*"
                  type="text"
                  name="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleInputChange}
                  required
                />
                
                {/* Apartment */}
                <Input
                  label="Apartment, floor, etc. (optional)"
                  type="text"
                  name="apartment"
                  value={billingDetails.apartment}
                  onChange={handleInputChange}
                />
                
                {/* Town/City */}
                <Input
                  label="Town/City*"
                  type="text"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleInputChange}
                  required
                />
                
                {/* Phone */}
                <Input
                  label="Phone Number*"
                  type="tel"
                  name="phone"
                  value={billingDetails.phone}
                  onChange={handleInputChange}
                  required
                />
                
                {/* Email */}
                <Input
                  label="Email Address*"
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleInputChange}
                  required
                />
                
                {/* Save Info Checkbox */}
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
              
              {/* Order Summary - Right Side */}
              <div>
                {/* Product List */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="font-medium">${item.price}</span>
                    </div>
                  ))}
                </div>
                
                {/* Order Total */}
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
                
                {/* Payment Method */}
                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold mb-4">Payment Method</h3>
                  
                  {/* Bank/Card Payment */}
                  <label className="flex items-center justify-between cursor-pointer p-4 border border-neutral-300 rounded hover:border-black transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                        className="w-4 h-4 text-accent"
                      />
                      <span>Bank</span>
                    </div>
                    <div className="flex gap-2">
                      <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa" className="h-6" />
                      <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" className="h-6" />
                      <img src="https://via.placeholder.com/40x25?text=Paypal" alt="Paypal" className="h-6" />
                    </div>
                  </label>
                  
                  {/* Cash on Delivery */}
                  <label className="flex items-center gap-3 cursor-pointer p-4 border border-neutral-300 rounded hover:border-black transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'cod')}
                      className="w-4 h-4 text-accent"
                    />
                    <span>Cash on delivery</span>
                  </label>
                </div>
                
                {/* Coupon Code */}
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
                
                {/* Place Order Button */}
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

