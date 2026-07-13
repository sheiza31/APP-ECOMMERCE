"use client"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, User, History, CreditCard, Heart, MapPin, ChevronRight, Check, X, Loader2, Package, Truck, CheckCircle2, Clock, XCircle } from "lucide-react"

interface UserProfile {
    id: number;
    name: string;
    email: string;
    role: string;
    phone?: string;
    address?: string;
    avatar?: string;
}

interface OrderItem {
    id: number;
    product_id: number;
    quantity: number;
    price: number;
    subtotal: number;
    Product?: {
        name: string;
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
    ShippingAddress: string;
    CreatedAt: string;
    OrderItems: OrderItem[];
}

// ──────────────────────────────────────────────────────────
// Track Order Timeline
// ──────────────────────────────────────────────────────────
const TRACK_STEPS = [
    { key: "pending",   label: "Order Placed",      Icon: Clock,          desc: "Your order has been received." },
    { key: "paid",      label: "Payment Confirmed",  Icon: CreditCard,     desc: "Payment successfully processed." },
    { key: "shipped",   label: "Shipped",            Icon: Truck,          desc: "Your package is on the way." },
    { key: "completed", label: "Delivered",          Icon: CheckCircle2,   desc: "Order delivered successfully." },
]
const STATUS_ORDER = ["pending", "paid", "shipped", "completed"]

function TrackOrderModal({ order, onClose }: { order: Order; onClose: () => void }) {
    const currentIdx = order.OrderStatus === "cancelled" ? -1 : STATUS_ORDER.indexOf(order.OrderStatus)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-surface-container-low transition-colors">
                    <X size={18} />
                </button>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-1">Track Order</h2>
                <p className="text-on-surface-variant font-body-sm text-body-sm mb-6">#{order.OrderNumber || order.ID}</p>

                {order.OrderStatus === "cancelled" ? (
                    <div className="flex flex-col items-center gap-3 py-6 text-red-500">
                        <XCircle size={48} strokeWidth={1.5} />
                        <p className="font-headline-sm text-headline-sm">Order Cancelled</p>
                        <p className="text-on-surface-variant font-body-sm text-body-sm text-center">This order has been cancelled.</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-0">
                        {TRACK_STEPS.map((step, i) => {
                            const done = i <= currentIdx
                            const active = i === currentIdx
                            const { Icon } = step
                            return (
                                <div key={step.key} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${done ? "border-primary bg-primary text-white" : "border-outline-variant bg-surface-container text-outline"}`}>
                                            <Icon size={16} />
                                        </div>
                                        {i < TRACK_STEPS.length - 1 && (
                                            <div className={`w-0.5 h-10 mt-0.5 ${i < currentIdx ? "bg-primary" : "bg-outline-variant"}`} />
                                        )}
                                    </div>
                                    <div className="pb-6">
                                        <p className={`font-label-md text-label-md ${done ? "text-primary" : "text-on-surface-variant"} ${active ? "font-bold" : ""}`}>
                                            {step.label}
                                            {active && <span className="ml-2 text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">Current</span>}
                                        </p>
                                        <p className="text-on-surface-variant font-body-sm text-body-sm">{step.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

// ──────────────────────────────────────────────────────────
// Order Details Modal
// ──────────────────────────────────────────────────────────
function OrderDetailsModal({ order, onClose }: { order: Order; onClose: () => void }) {
    const statusColor = order.OrderStatus === "completed" ? "bg-green-100 text-green-700"
        : order.OrderStatus === "cancelled" ? "bg-red-100 text-red-700"
        : order.OrderStatus === "shipped" ? "bg-blue-100 text-blue-700"
        : "bg-surface-container-high text-on-surface-variant"

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-white rounded-t-2xl border-b border-outline-variant px-6 py-4 flex justify-between items-center">
                    <div>
                        <h2 className="font-headline-sm text-headline-sm text-primary">Order Details</h2>
                        <p className="text-on-surface-variant font-body-sm text-body-sm">#{order.OrderNumber || order.ID}</p>
                    </div>
                    <button onClick={onClose} className="p-1.5 rounded-full hover:bg-surface-container-low transition-colors">
                        <X size={18} />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    {/* Status badges */}
                    <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm capitalize ${statusColor}`}>
                            {order.OrderStatus || "pending"}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm capitalize">
                            {order.PaymentMethod?.replace("_", " ") || "N/A"}
                        </span>
                        <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm capitalize ${order.PaymentStatus === "paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                            Payment: {order.PaymentStatus || "pending"}
                        </span>
                    </div>

                    {/* Date & Address */}
                    <div className="space-y-1 text-on-surface-variant font-body-sm text-body-sm">
                        <p>📅 {new Date(order.CreatedAt).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
                        {order.ShippingAddress && <p>📍 {order.ShippingAddress}</p>}
                    </div>

                    {/* Items */}
                    <div>
                        <p className="font-label-md text-label-md text-primary mb-3">Items ({order.OrderItems?.length || 0})</p>
                        <div className="space-y-3">
                            {order.OrderItems?.map((item, i) => {
                                const img = item.Product?.ProductsVariants?.find(v => v.image)?.image
                                return (
                                    <div key={i} className="flex items-center gap-3 p-3 border border-outline-variant rounded-xl">
                                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-surface-container shrink-0">
                                            {img ? (
                                                <img src={img} alt={item.Product?.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Package size={24} className="text-outline-variant" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-label-md text-label-md text-primary truncate">{item.Product?.name || "Unknown Product"}</p>
                                            <p className="text-on-surface-variant font-body-sm text-body-sm">Qty: {item.quantity} × ${item.price?.toFixed(2)}</p>
                                        </div>
                                        <p className="font-label-md text-label-md text-primary shrink-0">${item.subtotal?.toFixed(2)}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Total */}
                    <div className="border-t border-outline-variant pt-4 flex justify-between items-center">
                        <span className="font-headline-sm text-headline-sm text-primary">Total</span>
                        <span className="font-headline-sm text-headline-sm text-primary">${order.TotalPrice?.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ──────────────────────────────────────────────────────────
// Main AsideBar
// ──────────────────────────────────────────────────────────
const AsideBar = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [trackingOrder, setTrackingOrder] = useState<Order | null>(null);
    const [detailOrder, setDetailOrder] = useState<Order | null>(null);

    const fetchOrders = async (token: string) => {
        try {
            const res = await fetch("http://localhost:8080/api/v1/order/me", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (res.ok) {
                const json = await res.json();
                setOrders(json.data || []);
            }
        } catch (error) {
            console.error("Failed to fetch orders", error);
        }
    };

    const fetchProfile = async () => {
        const token = localStorage.getItem("token");
        if (!token) { setLoading(false); return; }
        try {
            const res = await fetch("http://localhost:8080/api/v1/auth/me", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (res.ok) {
                const json = await res.json();
                setProfile(json.data);
                setFormData({ name: json.data.name || "", email: json.data.email || "", phone: json.data.phone || "", address: json.data.address || "" });
            } else {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                document.cookie = "token=; path=/; max-age=0";
                document.cookie = "role=; path=/; max-age=0";
            }
        } catch (error) {
            console.error("Failed to fetch profile", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetchProfile();
        if (token) fetchOrders(token);
    }, []);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAvatarFile(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleSave = async () => {
        setSaving(true);
        const token = localStorage.getItem("token");
        if (!token) { setSaving(false); return; }
        try {
            const fd = new FormData();
            fd.append("name", formData.name);
            fd.append("email", formData.email);
            fd.append("phone", formData.phone);
            fd.append("address", formData.address);
            if (avatarFile) fd.append("avatar", avatarFile);
            const res = await fetch("http://localhost:8080/api/v1/auth/me", {
                method: "PATCH",
                headers: { "Authorization": `Bearer ${token}` },
                body: fd,
            });
            if (res.ok) {
                const json = await res.json();
                setProfile(json.data);
                setIsEditing(false);
                setAvatarFile(null);
                setAvatarPreview(null);
            } else {
                alert("Failed to update profile.");
            }
        } catch (error) {
            console.error("Error updating profile", error);
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setAvatarFile(null);
        setAvatarPreview(null);
        if (profile) setFormData({ name: profile.name || "", email: profile.email || "", phone: profile.phone || "", address: profile.address || "" });
    };

    const avatarSrc = avatarPreview || (profile?.avatar ? `http://localhost:8080${profile.avatar}` : null);

    const FIELDS = [
        { key: "name",    label: "Full Name",      type: "text"  },
        { key: "email",   label: "Email Address",  type: "email" },
        { key: "phone",   label: "Phone Number",   type: "tel",  placeholder: "+62..." },
        { key: "address", label: "Address",        type: "text",  placeholder: "Your address..." },
    ]

    return (
        <>
            {trackingOrder && <TrackOrderModal order={trackingOrder} onClose={() => setTrackingOrder(null)} />}
            {detailOrder && <OrderDetailsModal order={detailOrder} onClose={() => setDetailOrder(null)} />}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <aside className="md:col-span-3">
                    <nav className="flex flex-col gap-unit">
                        <a className="nav-link-active flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all" href="#">
                            <User className="w-5 h-5" /> My Profile
                        </a>
                        <a className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all" href="#">
                            <History className="w-5 h-5" /> Order History
                        </a>
                        <a className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all" href="#">
                            <MapPin className="w-5 h-5" /> Addresses
                        </a>
                        <a className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all" href="#">
                            <CreditCard className="w-5 h-5" /> Payment Methods
                        </a>
                        <a className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all" href="#">
                            <Heart className="w-5 h-5" /> Wishlist
                        </a>
                    </nav>
                </aside>

                <div className="md:col-span-9 space-y-stack-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                        {/* Personal Info */}
                        <section className="bg-surface-container-lowest p-stack-lg rounded-xl order-card-shadow">
                            <div className="flex justify-between items-center mb-stack-md">
                                <h2 className="font-headline-sm text-headline-sm">Personal Information</h2>
                                {!isEditing ? (
                                    <button onClick={() => setIsEditing(true)} className="text-primary hover:underline font-label-sm text-label-sm">Edit</button>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <button onClick={handleSave} disabled={saving} className="flex items-center gap-1 px-3 py-1 bg-primary text-white rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity disabled:opacity-50">
                                            {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />} Save
                                        </button>
                                        <button onClick={handleCancel} className="flex items-center gap-1 px-3 py-1 border border-outline-variant text-on-surface-variant rounded-lg font-label-sm text-label-sm hover:bg-surface-container-low transition-colors">
                                            <X size={14} /> Cancel
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-center mb-stack-md">
                                <div className="relative group w-20 h-20">
                                    <div className="w-20 h-20 rounded-full bg-surface-container-high overflow-hidden border-2 border-outline-variant">
                                        {avatarSrc ? (
                                            <img src={avatarSrc} alt="Avatar" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-primary/10">
                                                <User className="text-primary w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                    {isEditing && (
                                        <>
                                            <button onClick={() => fileInputRef.current?.click()} className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                                <Camera size={20} className="text-white" />
                                            </button>
                                            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-stack-md">
                                {FIELDS.map(f => (
                                    <div key={f.key}>
                                        <p className="text-on-surface-variant font-label-sm text-label-sm mb-unit">{f.label}</p>
                                        {isEditing ? (
                                            <input
                                                type={f.type}
                                                value={(formData as any)[f.key]}
                                                onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                                                placeholder={(f as any).placeholder || ""}
                                                className="w-full px-3 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md text-primary placeholder:text-outline-variant"
                                            />
                                        ) : (
                                            <p className="font-body-md text-body-md">{loading ? "Loading..." : (profile as any)?.[f.key] || "N/A"}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inner Circle */}
                        <section className="bg-primary text-on-primary p-stack-lg rounded-xl order-card-shadow relative overflow-hidden">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="flex justify-between items-start mb-stack-lg relative z-10">
                                <div>
                                    <h2 className="font-headline-sm text-headline-sm text-white">Inner Circle</h2>
                                    <p className="text-primary-fixed-dim font-body-sm text-body-sm">You&apos;re 250 points away from Gold</p>
                                </div>
                                <span className="material-symbols-outlined text-primary-fixed-dim" style={{fontVariationSettings: 'FILL 1'}}>workspace_premium</span>
                            </div>
                            <div className="mb-stack-md relative z-10">
                                <div className="flex justify-between mb-unit font-label-sm text-label-sm">
                                    <span>Silver Status</span>
                                    <span>750 / 1000 pts</span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-fixed-dim rounded-full" style={{width: '75%'}}></div>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-white text-primary rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors relative z-10">Explore Rewards</button>
                        </section>
                    </div>

                    {/* Recent Orders */}
                    <section className="bg-surface-container-lowest p-stack-lg rounded-xl order-card-shadow">
                        <div className="flex justify-between items-center mb-stack-lg">
                            <h2 className="font-headline-sm text-headline-sm">Recent Orders</h2>
                            <a className="text-primary hover:underline font-label-sm text-label-sm flex items-center gap-1" href="#">
                                View All <span className="material-symbols-outlined text-[16px]"><ChevronRight /></span>
                            </a>
                        </div>
                        {orders.length === 0 ? (
                            <div className="text-center py-8 text-on-surface-variant font-body-md text-body-md">
                                No orders yet. Start shopping!
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {orders.slice(0, 3).map((order) => {
                                    const firstItem = order.OrderItems?.[0];
                                    const productName = firstItem?.Product?.name || "Product";
                                    const productImage = firstItem?.Product?.ProductsVariants?.find(v => v.image)?.image || null;
                                    const extraItems = (order.OrderItems?.length || 0) - 1;
                                    return (
                                        <div key={order.ID} className="flex flex-col sm:flex-row items-center gap-gutter p-4 border border-outline-variant rounded-lg">
                                            <div className="w-24 h-24 flex-shrink-0 bg-surface-container-low rounded-lg overflow-hidden">
                                                {productImage ? (
                                                    <img className="w-full h-full object-cover" src={productImage} alt={productName} />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm text-center p-2">
                                                        {productName.slice(0, 2).toUpperCase()}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-grow space-y-unit">
                                                <div className="flex justify-between">
                                                    <h3 className="font-headline-sm text-headline-sm">
                                                        {productName}{extraItems > 0 ? ` + ${extraItems} more` : ""}
                                                    </h3>
                                                    <span className="font-label-md text-label-md text-primary">${order.TotalPrice?.toFixed(2)}</span>
                                                </div>
                                                <p className="text-on-surface-variant font-body-sm text-body-sm">
                                                    Order #{order.OrderNumber || order.ID} • {new Date(order.CreatedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                                                </p>
                                                <div className="flex gap-2 pt-2">
                                                    <span className={`px-2 py-0.5 rounded font-label-sm text-label-sm capitalize ${
                                                        order.OrderStatus === "completed" ? "bg-green-100 text-green-700" :
                                                        order.OrderStatus === "cancelled" ? "bg-red-100 text-red-700" :
                                                        order.OrderStatus === "shipped" ? "bg-blue-100 text-blue-700" :
                                                        "bg-surface-container-high text-on-surface-variant"
                                                    }`}>{order.OrderStatus || "pending"}</span>
                                                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm capitalize">
                                                        {order.PaymentMethod?.replace("_", " ") || "N/A"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full sm:w-auto">
                                                <button
                                                    onClick={() => setTrackingOrder(order)}
                                                    className="px-4 py-2 bg-primary text-white rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity"
                                                >
                                                    Track Package
                                                </button>
                                                <button
                                                    onClick={() => setDetailOrder(order)}
                                                    className="px-4 py-2 border border-outline-variant text-primary rounded-lg font-label-sm text-label-sm hover:bg-surface-container-low transition-colors"
                                                >
                                                    Order Details
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </section>

                    <section className="bg-surface-container-low p-stack-lg rounded-xl flex flex-col md:flex-row justify-between items-center gap-stack-md">
                        <div>
                            <h2 className="font-headline-sm text-headline-sm mb-unit">Personalize Your Experience</h2>
                            <p className="text-on-surface-variant font-body-sm text-body-sm">Manage your communication preferences and discovery settings.</p>
                        </div>
                        <button className="px-6 py-3 bg-white border border-outline-variant text-primary rounded-lg font-label-md text-label-md hover:shadow-sm transition-all whitespace-nowrap">
                            Account Settings
                        </button>
                    </section>
                </div>
            </div>
        </>
    )
}
export default AsideBar