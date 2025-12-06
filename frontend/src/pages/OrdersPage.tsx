import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { orderAPI } from "@/api/apiClient";
import { Button } from "@/components/ui/Button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useToast } from "@/contexts/ToastContext";
import { Order } from "@/types";

export const OrdersPage: FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await orderAPI.getMyOrders();
        // backend returns an array of orders
        setOrders(data);
      } catch (error: any) {
        showToast("Failed to load orders", "error");
        if (error.response?.status === 401) {
          navigate("/signin");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [navigate, showToast]);

  if (isLoading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="w-full py-16">
      <div className="container-custom">
        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Orders</h2>
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>

          {!orders || orders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">You have no orders yet.</p>
              <div className="mt-6">
                <Button onClick={() => navigate("/products")}>Shop Now</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order: any) => (
                <div key={order._id || order.id} className="border rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="text-sm text-gray-500">Order ID</div>
                      <div className="font-medium">{order._id || order.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Total</div>
                      <div className="font-medium">
                        ${order.totalPrice ?? order.total ?? order.totalPrice}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Items: {order.items?.length ?? 0}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {new Date(order.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
