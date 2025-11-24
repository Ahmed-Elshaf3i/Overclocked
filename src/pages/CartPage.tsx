import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useCart } from '@/contexts/CartContext';

// CartPage component - Shopping cart with table layout
export const CartPage: FC = () => {
  // Use cart context
  const { items: cartItems, updateQuantity, removeFromCart } = useCart();
  
  // Coupon code state
  const [couponCode, setCouponCode] = useState('');
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;
  
  // Handle quantity change
  const handleQuantityChange = (productId: string, newQuantity: number): void => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };
  
  // Handle remove item
  const handleRemove = (productId: string): void => {
    removeFromCart(productId);
  };
  
  // Handle coupon apply
  const handleApplyCoupon = (): void => {
    if (couponCode) {
      alert(`Coupon "${couponCode}" applied!`);
      // In real app: validate and apply discount
    }
  };
  
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black">Home</a>
          <span>/</span>
          <span className="text-black">Cart</span>
        </div>
      </div>
      
      {/* Cart Section */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          {cartItems.length === 0 ? (
            /* Empty Cart Message */
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some products to get started!</p>
              <Link to="/">
                <Button variant="primary">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Table */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                {/* Table Header */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 bg-white border-b border-neutral-200 px-6 py-4 font-semibold">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                  <div className="col-span-1"></div>
                </div>
                
                {/* Table Body */}
                <div className="divide-y divide-neutral-200">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 items-center">
                      {/* Product Info */}
                      <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <span className="font-medium">{item.product.name}</span>
                      </div>
                      
                      {/* Price */}
                      <div className="col-span-1 md:col-span-2 text-center">
                        <span className="md:hidden font-semibold mr-2">Price:</span>
                        ${item.product.price}
                      </div>
                      
                      {/* Quantity Input */}
                      <div className="col-span-1 md:col-span-2 flex justify-center">
                        <div className="flex items-center border border-neutral-300 rounded">
                          <button
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-neutral-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                            className="w-16 text-center border-x border-neutral-300 py-1 focus:outline-none"
                            min="1"
                          />
                          <button
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-neutral-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      {/* Subtotal */}
                      <div className="col-span-1 md:col-span-2 text-center font-semibold">
                        <span className="md:hidden font-semibold mr-2">Subtotal:</span>
                        ${item.product.price * item.quantity}
                      </div>
                      
                      {/* Remove Button */}
                      <div className="col-span-1 md:col-span-1 flex justify-center">
                        <button
                          onClick={() => handleRemove(item.product.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                          aria-label="Remove item"
                        >
                          <XMarkIcon className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                <Link to="/">
                  <Button variant="outline">Return To Shop</Button>
                </Link>
                <Button variant="outline">Update Cart</Button>
              </div>
              
              {/* Coupon and Cart Total */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Coupon Code */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="primary" onClick={handleApplyCoupon}>
                    Apply Coupon
                  </Button>
                </div>
                
                {/* Cart Total Summary */}
                <div className="border-2 border-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Cart Total</h3>
                  
                  <div className="space-y-4">
                    {/* Subtotal */}
                    <div className="flex justify-between pb-4 border-b border-neutral-200">
                      <span>Subtotal:</span>
                      <span>${subtotal}</span>
                    </div>
                    
                    {/* Shipping */}
                    <div className="flex justify-between pb-4 border-b border-neutral-200">
                      <span>Shipping:</span>
                      <span className="text-success font-medium">Free</span>
                    </div>
                    
                    {/* Total */}
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${total}</span>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <Link to="/checkout" className="block mt-6">
                    <Button variant="primary" fullWidth>
                      Proceed to checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

