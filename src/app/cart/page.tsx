"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface BlogData {
  title: string;
  imageUrl: string;
  _id: string;
  price: number;
  description: string;
  quantity:number;
}

type CartItem = BlogData & { quantity: number };

export default function Frame() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        // Ensure no duplicates and validate cart
        if (Array.isArray(parsedCart) && parsedCart.every((item: BlogData) => item._id && item.price && item.quantity >= 1)) {
          setCartItems(parsedCart);
        }
      } catch (error) {
        console.error("Error parsing cart from localStorage", error);
      }
    }
  }, []);

  // Helper function to update cart item in localStorage
  const updateLocalStorage = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    updateLocalStorage(updatedCart);
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    updateLocalStorage(updatedCart);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex w-full px-4 py-8 lg:px-[104px] lg:py-[22px] space-x-11 pt-32">
      <div className="font-inter flex flex-grow flex-wrap items-start justify-center gap-x-8 gap-y-8 pb-32 pr-14 tracking-[0px] sm:flex-nowrap">
        <div className="self-stretch w-full lg:w-full">
          <div className="w-14 text-[22px] font-medium leading-[33px] text-neutral-950">
            Bag
          </div>
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">Your cart is empty.</p>
              <Link href="/" className="text-blue-600 underline hover:text-blue-800 mt-4 inline-block">
                Go back to shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center bg-transparent py-6 pr-[70px] shadow-inner">
                <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 sm:flex-nowrap">
                  {item.imageUrl && (
                    <img
                      className="h-36 w-36 flex-shrink-0 object-cover object-center"
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                  <div className="text-sm">
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div>Quantity: {item.quantity}</div>
                    <div>Price: ${item.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center space-x-2 mt-4">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-[15px] leading-7 text-neutral-950">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col items-center justify-center pt-[5px] w-full lg:w-auto">
          <div className="flex flex-col items-start gap-y-2 text-neutral-950">
            <div className="text-[21px] w-full font-medium leading-[33px]">Summary</div>
            <div className="flex items-center justify-between w-full py-4 border-t border-b">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between w-full py-4">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between w-full py-4 border-t border-b">
              <span>Total</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <Link href="../checkout"><button className="rounded-[30px] bg-[#1eabb0] px-12 py-[18px] text-center text-[15px] font-medium leading-6 text-white">
              Member Checkout
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
