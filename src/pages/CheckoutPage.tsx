import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { BillingDetails } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';

// CheckoutPage component - Billing and payment page
export const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const { showToast } = useToast();
  
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
  
  // Calculate totals from actual cart
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
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
  
  // Handle coupon apply
  const handleApplyCoupon = (): void => {
    if (couponCode) {
      showToast(`Coupon "${couponCode}" applied successfully!`, 'success');
      setCouponCode('');
    } else {
      showToast('Please enter a coupon code', 'error');
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      showToast('Your cart is empty!', 'error');
      return;
    }
    
    console.log('Order placed:', { billingDetails, paymentMethod, cartItems });
    showToast('Order placed successfully!', 'success');
    clearCart();
    
    // Redirect to home page after successful order
    setTimeout(() => {
      navigate('/');
    }, 2000);
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
                {cartItems.length === 0 ? (
                  <div className="text-center py-8 text-gray-600">
                    <p>Your cart is empty</p>
                    <Link to="/products" className="text-accent hover:underline mt-2 inline-block">
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <span className="text-sm block">{item.product.name}</span>
                            <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                          </div>
                        </div>
                        <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                )}
                
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
                  <Button variant="primary" type="button" onClick={handleApplyCoupon}>
                    Apply Coupon
                  </Button>
                </div>
                
                {/* Place Order Button */}
                <div className="mt-6">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    fullWidth
                    disabled={cartItems.length === 0}
                  >
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

