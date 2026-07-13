"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, Trash2 } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import Link from "next/link";

const FormShipping = () => {
    const { cart, totalPrice, removeFromCart } = useCart();
    const [fullname, setFullName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            fullname,
            address,
            city,
            postalCode,
            phoneNumber
        });
    }

    return (
        <>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                {/* <!-- Left Column: Shipping Form --> */}
                <section className="lg:col-span-7 space-y-stack-lg">
                    <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border border-outline-variant/30">
                        <h2 className="font-headline-md text-headline-md text-primary mb-stack-lg">Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="space-y-stack-md">
                            <div className="grid grid-cols-1 gap-stack-md">
                                <div>
                                    <label className="block font-label-md text-label-md text-secondary mb-2" htmlFor="full-name">Full Name</label>
                                    <input value={fullname} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="full-name" placeholder="Johnathan Doe" type="text" />
                                </div>
                                <div>
                                    <label className="block font-label-md text-label-md text-secondary mb-2" htmlFor="address">Address</label>
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="address" placeholder="123 Minimalist Way" type="text" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                                    <div>
                                        <label className="block font-label-md text-label-md text-secondary mb-2" htmlFor="city">City</label>
                                        <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="city" placeholder="San Francisco" type="text" />
                                    </div>
                                    <div>
                                        <label className="block font-label-md text-label-md text-secondary mb-2" htmlFor="postal-code">Postal Code</label>
                                        <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="postal-code" placeholder="94103" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-label-md text-label-md text-secondary mb-2" htmlFor="phone">Phone Number</label>
                                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                                </div>
                            </div>
                            <div className="pt-stack-md">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <ChevronLeft />
                                    <Link href="/collections" className="font-body-sm text-body-sm text-on-surface-variant">Back to Collections</Link>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-end pt-stack-md">
                        <button onClick={() => { router.push('/payments') }} className="bg-primary cursor-pointer text-on-primary px-stack-lg py-4 rounded-lg font-label-md text-label-md hover:bg-primary/90 active:scale-95 transition-all shadow-md w-full md:w-auto">
                            Continue to Payment
                        </button>
                    </div>
                </section>
                {/* <!-- Right Column: Order Summary --> */}
                <aside className="lg:col-span-5">
                    <div className="bg-surface-container-low p-stack-lg rounded-xl shadow-sm border border-outline-variant/30 sticky top-24">
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-lg">Order Summary</h3>
                        {/* <!-- Item List --> */}
                        <div className="space-y-stack-md mb-stack-lg max-h-96 overflow-y-auto pr-2">
                            {cart.length === 0 ? (
                                <p className="text-on-surface-variant font-body-sm text-center py-4">Your cart is empty.</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center group">
                                        <div className="relative w-20 h-20 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                            {item.image ? (
                                                <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                                            ) : (
                                                <div className="w-full h-full bg-surface-container-high" />
                                            )}
                                            <span className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] w-5 h-5 flex items-center justify-center rounded-bl-lg font-bold">{item.quantity}</span>
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="font-body-md text-body-md text-primary font-semibold truncate">{item.name}</p>
                                            {item.color && <p className="font-body-sm text-body-sm text-on-surface-variant capitalize">{item.color}</p>}
                                            <p className="font-label-md text-label-md text-primary mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-1.5 cursor-pointer rounded-lg text-error hover:text-error hover:bg-error/10 transition-all opacity-0 group-hover:opacity-100"
                                            title="Remove item"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="border-t border-outline-variant pt-stack-md space-y-stack-sm">
                            <div className="flex justify-between items-center">
                                <span className="font-body-md text-body-md text-on-surface-variant">Subtotal</span>
                                <span className="font-body-md text-body-md text-primary font-medium">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-body-md text-body-md text-on-surface-variant">Shipping</span>
                                <span className="font-body-md text-body-md text-primary font-medium">$12.00</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 mt-2 border-t border-outline-variant">
                                <span className="font-headline-sm text-headline-sm text-primary">Total</span>
                                <div className="text-right">
                                    <span className="text-xs text-on-surface-variant uppercase tracking-widest block">USD</span>
                                    <span className="font-headline-sm text-headline-sm text-primary">${(totalPrice + 12).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-stack-lg">
                            <div className="flex gap-2">
                                <input className="flex-grow px-4 py-2 border border-outline-variant rounded-lg bg-surface text-body-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Promo code" type="text" />
                                <button className="bg-black text-on-secondary px-4 py-2 rounded-lg font-label-sm text-label-sm hover:bg-secondary/90 transition-colors">Apply</button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

        </>
    )
}
export default FormShipping