"use client"
import { useEffect, useState } from "react"
import { Truck, ShoppingBag, Package, CreditCard, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface OrderItem {
    id: number;
    product_id: number;
    quantity: number;
    price: number;
    subtotal: number;
    Product?: {
        name: string;
        images?: string[];
        ProductsVariants?: { image: string, color: string }[];
    };
}

interface Order {
    ID: number;
    OrderNumber: string;
    TotalPrice: number;
    OrderStatus: string;
    PaymentMethod: string;
    PaymentStatus: string;
    CreatedAt: string;
    OrderItems: OrderItem[];
}

interface UserProfile {
    name: string;
    email: string;
    address: string;
}

const MainDetails = () => {
    const router = useRouter();
    const [order, setOrder] = useState<Order | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestOrderAndProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                // Fetch profile
                const profileRes = await fetch("http://localhost:8080/api/v1/auth/me", {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                if (profileRes.ok) {
                    const profileJson = await profileRes.json();
                    setProfile(profileJson.data);
                }

                // Fetch orders
                const ordersRes = await fetch("http://localhost:8080/api/v1/order/me", {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                if (ordersRes.ok) {
                    const ordersJson = await ordersRes.json();
                    if (ordersJson.data && ordersJson.data.length > 0) {
                        setOrder(ordersJson.data[0]); // The latest order
                    }
                }
            } catch (error) {
                console.error("Failed to fetch order details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLatestOrderAndProfile();
    }, []);

    if (loading) {
        return <div className="text-center py-20 font-body-md text-on-surface-variant">Loading your order details...</div>;
    }

    if (!order) {
        return (
            <div className="text-center py-20 space-y-4">
                <p className="font-body-md text-on-surface-variant">No recent order found.</p>
                <button onClick={() => router.push("/shop")} className="bg-primary text-white px-6 py-2 rounded-lg font-label-md">Start Shopping</button>
            </div>
        );
    }

    const subtotal = order.TotalPrice - 12; // Reversing shipping fee for display

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <div className="md:col-span-8 space-y-stack-lg">
                    <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border border-outline-variant">
                        <div className="flex flex-wrap justify-between gap-stack-md border-b border-outline-variant pb-stack-md mb-stack-md">
                            <div>
                                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Order Number</p>
                                <p className="font-headline-sm text-headline-sm text-primary">#{order.OrderNumber || order.ID}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Order Date</p>
                                <p className="font-body-md text-body-md text-primary">
                                    {new Date(order.CreatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-stack-md">
                            <p className="font-label-md text-label-md text-primary font-bold mb-stack-md">Items in your order</p>
                            
                            {order.OrderItems?.map((item) => {
                                const productName = item.Product?.name || "Product";
                                const productImage = item.Product?.ProductsVariants?.find(v => v.image)?.image || null;
                                const color = item.Product?.ProductsVariants?.[0]?.color || "Default";
                                
                                return (
                                    <div key={item.id} className="flex gap-stack-md">
                                        <div className="w-24 h-24 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden">
                                            {productImage ? (
                                                <img className="w-full h-full object-cover" src={productImage} alt={productName} />
                                            ) : (
                                                <div className="w-full h-full bg-surface-container-high flex items-center justify-center text-xs text-on-surface-variant">No Image</div>
                                            )}
                                        </div>
                                        <div className="flex-grow flex flex-col justify-center">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-headline-sm text-headline-sm text-primary">{productName}</h3>
                                                <p className="font-label-md text-label-md text-primary">${item.price?.toFixed(2)}</p>
                                            </div>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant capitalize">{color}</p>
                                            <p className="font-label-sm text-label-sm text-secondary mt-1">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                        <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant">
                            <h4 className="font-label-md text-label-md text-primary font-bold mb-stack-md flex items-center gap-2">
                                <Truck size={18} />
                                Shipping Address
                            </h4>
                            <address className="not-italic font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                {profile?.name || "Guest User"}<br />
                                {profile?.address ? (
                                    <span dangerouslySetInnerHTML={{ __html: profile.address.replace(/\n/g, "<br />") }} />
                                ) : (
                                    <span>No address provided</span>
                                )}
                            </address>
                        </div>
                        <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant">
                            <h4 className="font-label-md text-label-md text-primary font-bold mb-stack-md flex items-center gap-2">
                                <Package size={18} />
                                Payment Method
                            </h4>
                            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 capitalize">
                                <CreditCard size={20} />
                                {order.PaymentMethod.replace("_", " ")}
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 capitalize flex items-center gap-1">
                                Status: 
                                <span className={
                                    order.PaymentStatus === "paid" ? "text-green-600 font-bold" : 
                                    order.PaymentStatus === "failed" ? "text-red-600 font-bold" : 
                                    "text-yellow-600 font-bold"
                                }>
                                    {order.PaymentStatus}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 space-y-stack-md">
                    <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant sticky top-24">
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-md">Order Summary</h3>
                        <div className="space-y-stack-sm mb-stack-lg">
                            <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                                <span>Shipping</span>
                                <span>$12.00</span>
                            </div>
                            <div className="pt-stack-sm mt-stack-sm border-t border-outline-variant flex justify-between font-headline-md text-headline-md text-primary">
                                <span>Total</span>
                                <span>${order.TotalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="space-y-stack-sm">
                            <button onClick={() => router.push("/profile")} className="w-full bg-primary text-on-primary py-stack-md rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                                <Truck size={20} />
                                Track Order
                            </button>
                            <button onClick={() => router.push("/shop")} className="w-full bg-surface text-primary border border-primary py-stack-md rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all flex items-center justify-center gap-2">
                                <ShoppingBag size={20} />
                                Continue Shopping
                            </button>
                        </div>
                        <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant">
                            <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                                Need help with your order?<br />
                                <a className="text-primary font-semibold underline decoration-primary/30" href="#">Contact Support</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainDetails