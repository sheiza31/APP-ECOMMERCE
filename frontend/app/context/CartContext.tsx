"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    color?: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => Promise<boolean>;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    totalQuantity: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    
    const fetchCart = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            const res = await fetch("http://localhost:8080/api/v1/cart", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (res.ok) {
                const json = await res.json();
                if (json.data && json.data.CartItems) {
                    const formattedCart = json.data.CartItems.map((item: any) => ({
                        id: item.product_id, // we use product_id as the cart item id for frontend uniqueness
                        name: item.Product?.name || "Product",
                        price: item.price,
                        image: item.Product?.ProductsVariants?.find((v: any) => v.image)?.image || "",
                        quantity: item.quantity,
                        color: item.Product?.ProductsVariants?.[0]?.color || ""
                    }));
                    setCart(formattedCart);
                } else {
                    setCart([]);
                }
            }
        } catch (error) {
            console.error("Error fetching cart", error);
        }
    };

    // Load cart from backend on mount
    useEffect(() => {
        fetchCart();
    }, []);

    const addToCart = async (item: CartItem): Promise<boolean> => {
        const token = localStorage.getItem("token");
        if (!token) {
            const Swal = (await import("sweetalert2")).default;
            Swal.fire({
                icon: "warning",
                title: "Perhatian",
                text: "Silakan login terlebih dahulu untuk berbelanja.",
            });
            return false;
        }

        try {
            const res = await fetch("http://localhost:8080/api/v1/cart", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    product_id: item.id,
                    quantity: 1
                })
            });
            if (res.ok) {
                // Sukses dari backend -> ambil data keranjang terbaru untuk update UI
                fetchCart();
                return true;
            } else {
                const errData = await res.json().catch(() => ({}));
                const message = errData.message || "Gagal menambahkan produk ke keranjang belanja.";
                const Swal = (await import("sweetalert2")).default;
                Swal.fire({
                    icon: "error",
                    title: "Gagal",
                    text: message,
                });
                console.error("Failed to add to cart on backend:", message);
                return false;
            }
        } catch (error) {
            console.error(error);
            const Swal = (await import("sweetalert2")).default;
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: "Terjadi kesalahan jaringan, tidak dapat menghubungi server.",
            });
            return false;
        }
    };

    const removeFromCart = async (id: number) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
        
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const res = await fetch(`http://localhost:8080/api/v1/cart/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (!res.ok) {
                console.error("Failed to remove item on backend");
                fetchCart();
            }
        } catch (error) {
            console.error(error);
            fetchCart();
        }
    };

    const clearCart = async () => {
        setCart([]);
        
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            await fetch("http://localhost:8080/api/v1/cart", {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
