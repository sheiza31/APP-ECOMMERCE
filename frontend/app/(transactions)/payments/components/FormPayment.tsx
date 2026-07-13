"use client"
import { ArrowLeft, CreditCard, Landmark, Wallet, Building2, Smartphone, QrCode, Clock, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useCart } from "../../../context/CartContext"

type PaymentMethod = "credit_card" | "bank_transfer" | "digital_wallet" | "qris";

interface QRISData {
    order_id: string;
    qr_code_url: string;
    actions?: { name: string; url: string }[];
    gross_amount: number;
    expire_time: string;
    order_number: string;
}

const FormPayment = () => {
    const router = useRouter();
    const { cart, totalPrice, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit_card");
    const [loading, setLoading] = useState(false);
    const [qrisData, setQrisData] = useState<QRISData | null>(null);

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // For QRIS, call the dedicated endpoint
        if (paymentMethod === "qris") {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch("http://localhost:8080/api/v1/order/qris", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const json = await res.json();
                    setQrisData(json.data);
                } else {
                    const err = await res.json();
                    alert(err.message || "Failed to create QRIS payment");
                }
            } catch (error) {
                console.error("Error creating QRIS:", error);
                alert("Error connecting to payment service");
            } finally {
                setLoading(false);
            }
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:8080/api/v1/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    payment_method: paymentMethod,
                    items: cart,
                    total_amount: totalPrice + 12
                })
            });
            if (response.ok) {
                clearCart();
            } else {
                alert("Failed to place order.");
            }
        } catch (error) {
            console.error("Error placing order", error);
        } finally {
            setLoading(false);
            router.push('/review');
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                {/* <!-- Left Column: Payment Options & Form --> */}
                <div className="lg:col-span-7 space-y-stack-lg">
                    <section className="bg-surface-container-lowest p-stack-lg rounded-xl custom-shadow">
                        <h2 className="font-headline-md text-headline-md text-primary mb-stack-lg">Payment Method</h2>
                        {/* <!-- Payment Selection Tabs --> */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-md mb-stack-lg">
                            <button 
                                onClick={() => { setPaymentMethod("credit_card"); setQrisData(null); }}
                                className={`flex flex-col items-center gap-stack-sm p-stack-md rounded-lg transition-all ${paymentMethod === "credit_card" ? "border-2 border-primary bg-primary/5" : "border border-outline-variant hover:border-primary"}`}>
                                <CreditCard className={paymentMethod === "credit_card" ? "text-primary" : "text-secondary"} />
                                <span className={`font-label-md text-label-md ${paymentMethod === "credit_card" ? "text-primary" : "text-secondary"}`}>Credit Card</span>
                            </button>
                            <button 
                                onClick={() => { setPaymentMethod("bank_transfer"); setQrisData(null); }}
                                className={`flex flex-col items-center gap-stack-sm p-stack-md rounded-lg transition-all ${paymentMethod === "bank_transfer" ? "border-2 border-primary bg-primary/5" : "border border-outline-variant hover:border-primary"}`}>
                                <Landmark className={paymentMethod === "bank_transfer" ? "text-primary" : "text-secondary"} />
                                <span className={`font-label-md text-label-md ${paymentMethod === "bank_transfer" ? "text-primary" : "text-secondary"}`}>Bank Transfer</span>
                            </button>
                            <button 
                                onClick={() => { setPaymentMethod("digital_wallet"); setQrisData(null); }}
                                className={`flex flex-col items-center gap-stack-sm p-stack-md rounded-lg transition-all ${paymentMethod === "digital_wallet" ? "border-2 border-primary bg-primary/5" : "border border-outline-variant hover:border-primary"}`}>
                                <Wallet className={paymentMethod === "digital_wallet" ? "text-primary" : "text-secondary"} />
                                <span className={`font-label-md text-label-md ${paymentMethod === "digital_wallet" ? "text-primary" : "text-secondary"}`}>Digital Wallets</span>
                            </button>
                            <button 
                                onClick={() => { setPaymentMethod("qris"); setQrisData(null); }}
                                className={`flex flex-col items-center gap-stack-sm p-stack-md rounded-lg transition-all ${paymentMethod === "qris" ? "border-2 border-primary bg-primary/5" : "border border-outline-variant hover:border-primary"}`}>
                                <QrCode className={paymentMethod === "qris" ? "text-primary" : "text-secondary"} />
                                <span className={`font-label-md text-label-md ${paymentMethod === "qris" ? "text-primary" : "text-secondary"}`}>QRIS</span>
                            </button>
                        </div>
                        {/* <!-- Forms --> */}
                        {paymentMethod === "credit_card" && (
                            <form className="space-y-stack-md">
                                <div className="space-y-unit">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cardholder Name</label>
                                    <input className="w-full px-stack-md py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md text-primary placeholder:text-outline-variant" placeholder="ALEXANDER VOGUE" type="text" />
                                </div>
                                <div className="space-y-unit">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Card Number</label>
                                    <div className="relative">
                                        <input className="w-full px-stack-md py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md text-primary placeholder:text-outline-variant" placeholder="0000 0000 0000 0000" type="text" />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                                            <div className="w-8 h-5 bg-outline-variant rounded-sm opacity-50"></div>
                                            <div className="w-8 h-5 bg-outline-variant rounded-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-stack-md">
                                    <div className="space-y-unit">
                                        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Expiry Date</label>
                                        <input className="w-full px-stack-md py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md text-primary placeholder:text-outline-variant" placeholder="MM / YY" type="text" />
                                    </div>
                                    <div className="space-y-unit">
                                        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">CVV</label>
                                        <div className="relative">
                                            <input className="w-full px-stack-md py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md text-primary placeholder:text-outline-variant" placeholder="•••" type="password" />
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant cursor-help">info</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-stack-sm pt-stack-sm">
                                    <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="save-card" type="checkbox" />
                                    <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="save-card">Save this card for future purchases</label>
                                </div>
                            </form>
                        )}
                        {paymentMethod === "bank_transfer" && (
                            <div className="space-y-stack-md">
                                <div className="space-y-unit">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Select Bank</label>
                                    <select className="w-full px-stack-md py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md text-primary bg-transparent">
                                        <option value="bca">BCA (Bank Central Asia)</option>
                                        <option value="mandiri">Bank Mandiri</option>
                                        <option value="bni">BNI (Bank Negara Indonesia)</option>
                                        <option value="bri">BRI (Bank Rakyat Indonesia)</option>
                                    </select>
                                </div>
                                <div className="p-stack-md rounded-lg border border-outline-variant bg-surface-container-low text-center">
                                    <Building2 className="mx-auto text-secondary mb-2" size={32} />
                                    <p className="font-body-md text-body-md text-on-surface-variant">Please transfer the exact amount to our bank account. Instructions will be provided on the next page.</p>
                                </div>
                            </div>
                        )}
                        {paymentMethod === "digital_wallet" && (
                            <div className="space-y-stack-md">
                                <div className="space-y-unit">
                                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Select E-Wallet</label>
                                    <select className="w-full px-stack-md py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md text-primary bg-transparent">
                                        <option value="gopay">GoPay</option>
                                        <option value="ovo">OVO</option>
                                        <option value="dana">DANA</option>
                                        <option value="shopeepay">ShopeePay</option>
                                    </select>
                                </div>
                                <div className="p-stack-md rounded-lg border border-outline-variant bg-surface-container-low text-center">
                                    <Smartphone className="mx-auto text-secondary mb-2" size={32} />
                                    <p className="font-body-md text-body-md text-on-surface-variant">You will be redirected to the E-Wallet app to complete the payment.</p>
                                </div>
                            </div>
                        )}
                        {paymentMethod === "qris" && (
                            <div className="space-y-stack-md">
                                {!qrisData ? (
                                    <div className="p-stack-lg rounded-xl border border-outline-variant bg-surface-container-low text-center space-y-stack-md">
                                        <QrCode className="mx-auto text-primary" size={48} />
                                        <div>
                                            <h3 className="font-headline-sm text-headline-sm text-primary">Pay with QRIS</h3>
                                            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                                Scan with any Indonesian banking or e-wallet app.
                                                Supports GoPay, OVO, DANA, LinkAja, ShopeePay, and more.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-2 text-xs text-on-surface-variant">
                                            {["GoPay", "OVO", "DANA", "LinkAja", "ShopeePay", "BCA Mobile", "Jenius"].map(w => (
                                                <span key={w} className="px-2 py-1 rounded-full border border-outline-variant bg-surface-container font-label-sm text-label-sm">{w}</span>
                                            ))}
                                        </div>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                                            Click <strong>&quot;Place Order&quot;</strong> to generate your QR Code.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="p-stack-lg rounded-xl border-2 border-primary bg-primary/5 text-center space-y-stack-md">
                                        <div className="flex items-center justify-center gap-2 text-primary">
                                            <CheckCircle2 size={20} />
                                            <span className="font-label-md text-label-md">Order Created Successfully!</span>
                                        </div>
                                        <h3 className="font-headline-sm text-headline-sm text-primary">Scan QR Code to Pay</h3>
                                        {/* QR code image — rendered from Midtrans QR string via external QR generator */}
                                        <div className="flex justify-center">
                                            <div className="bg-white p-4 rounded-xl inline-block shadow-md">
                                                <img
                                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrisData.qr_code_url || qrisData.order_id)}`}
                                                    alt="QRIS QR Code"
                                                    width={220}
                                                    height={220}
                                                    className="rounded"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1 text-on-surface-variant">
                                            <p className="font-body-sm text-body-sm">Order <strong className="text-primary">#{qrisData.order_number}</strong></p>
                                            <p className="font-headline-sm text-headline-sm text-primary">${qrisData.gross_amount?.toFixed(2)}</p>
                                            {qrisData.expire_time && (
                                                <div className="flex items-center justify-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                                                    <Clock size={14} />
                                                    <span>Expires: {new Date(qrisData.expire_time).toLocaleString("id-ID")}</span>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => { clearCart(); router.push("/review"); }}
                                            className="w-full bg-primary text-white py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all"
                                        >
                                            I&apos;ve Completed Payment
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </section>
                    <div className="flex items-center justify-between">
                        <button onClick={()=>router.push('/shipping')} className="flex cursor-pointer items-center gap-2 px-stack-md py-stack-sm rounded-lg border border-outline-variant text-primary hover:bg-surface-container-low transition-colors font-label-md text-label-md">
                            <span className="material-symbols-outlined"><ArrowLeft /></span>
                            Back to Shipping
                        </button>
                        <button onClick={handlePlaceOrder} disabled={loading} className="md:hidden w-full max-w-[200px] bg-primary text-white py-4 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all active:scale-95 disabled:opacity-50">
                            {loading ? "Processing..." : "Place Order"}
                        </button>
                    </div>
                </div>
                {/* <!-- Right Column: Order Summary --> */}
                <div className="lg:col-span-5">
                    <aside className="sticky top-24 space-y-stack-md">
                        <div className="bg-surface-container-lowest p-stack-lg rounded-xl custom-shadow border border-surface-container-high">
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-lg">Order Summary</h3>

                            <div className="space-y-stack-md mb-stack-lg max-h-96 overflow-y-auto pr-2">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-stack-md">
                                        <div className="w-20 h-24 bg-surface-container-high rounded-lg overflow-hidden flex-shrink-0">
                                            {item.image ? (
                                                <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                                            ) : (
                                                <div className="w-full h-full bg-surface-container-high" />
                                            )}
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between">
                                                <h4 className="font-label-md text-label-md text-primary">{item.name}</h4>
                                                <span className="font-body-md text-body-md text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            {item.color && <p className="font-body-sm text-body-sm text-on-surface-variant capitalize">{item.color}</p>}
                                            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr className="border-outline-variant mb-stack-lg" />
                            <div className="space-y-stack-sm mb-stack-lg">
                                <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                                    <span>Shipping</span>
                                    <span className="text-secondary">$12.00</span>
                                </div>
                                <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                                    <span>Tax</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <hr className="border-outline-variant mb-stack-lg" />
                            <div className="flex justify-between items-end mb-stack-lg">
                                <span className="font-headline-sm text-headline-sm text-primary">Total</span>
                                <div className="text-right">
                                    <p className="font-display-lg text-[28px] leading-tight text-primary">${(totalPrice + 12).toFixed(2)}</p>
                                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">USD</p>
                                </div>
                            </div>
                            <button onClick={handlePlaceOrder} disabled={loading} className="w-full bg-primary text-white py-4 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-50">
                                {loading ? "Processing..." : "Place Order"}
                            </button>
                            <div className="mt-stack-md flex items-center justify-center gap-2 text-on-surface-variant">
                                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                                <span className="font-label-sm text-label-sm uppercase tracking-widest">Encrypted Secure Payment</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-stack-md rounded-xl border border-outline-variant border-dashed">
                            <div className="flex gap-2">
                                <input className="flex-grow px-stack-md py-2 bg-transparent border-b border-outline-variant focus:border-primary outline-none text-body-sm font-body-sm" placeholder="Promo Code" type="text" />
                                <button className="px-stack-md py-2 text-primary font-label-md text-label-md hover:underline">Apply</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}
export default FormPayment