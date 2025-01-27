"use client";
import React, { useState, useEffect } from "react";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", address: "", card: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
          const calculatedTotal = parsedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
          setTotal(calculatedTotal);
        }
      } catch (error) {
        console.error("Error loading cart from localStorage", error);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address || !form.card) {
      alert("Please fill out all fields.");
      return;
    }
    setOrderPlaced(true); // Toggle to show the confirmation slip
    localStorage.removeItem("cart"); // Clear cart
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 lg:px-24">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      {orderPlaced ? (
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-medium mb-4">Order Confirmation</h2>
          <div className="p-4 border rounded bg-gray-50">
            <p className="mb-2">
              <strong>Name:</strong> {form.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {form.email}
            </p>
            <p className="mb-2">
              <strong>Address:</strong> {form.address}
            </p>
            <h3 className="mt-4 mb-2 text-lg font-medium">Order Summary</h3>
            <ul className="divide-y divide-gray-300 mb-4">
              {cartItems.map((item) => (
                <li key={item._id} className="py-2 flex justify-between">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="font-medium text-right">Total: ${total.toFixed(2)}</p>
          </div>
          <a href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Back to Home
          </a>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          {cartItems.length === 0 ? (
            <p>
              Your cart is empty.{" "}
              <a href="/" className="text-blue-600 underline">
                Go back to shopping
              </a>
            </p>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                <ul className="divide-y divide-gray-300">
                  {cartItems.map((item) => (
                    <li key={item._id} className="py-4 flex items-center">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.title}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between font-medium py-4 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-medium">Payment Information</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  value={form.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="card"
                  placeholder="Card Number"
                  value={form.card}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
                >
                  Place Order
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
