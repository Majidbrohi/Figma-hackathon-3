"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";

// Define types for the data
interface BlogData {
  title: string;
  imageUrl: string;
  _id: string;
  price: number;
  description: string;
}

export default function FeaturedProducts() {
  const [data, setData] = useState<BlogData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == 'products']{
  title,
    price,
    inventory,
    _id,
    "imageUrl": image.asset->url,
    description,
    }`);
        setData(result); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: BlogData) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: BlogData) => item._id === product._id);

    if (existingItem) {
      // Update quantity if item already exists
      existingItem.quantity += 1;
    } else {
      // Add new item to the cart
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
        // Show modal with a message
        setModalMessage(`${product.title} has been added to your cart.`);
        setShowModal(true); // Show the modal
      };
    
      const closeModal = () => {
        setShowModal(false); 
  };

  return (
    <div className="font-inter flex flex-col items-start gap-y-11 px-5 py-20 md:px-28">
      <div className="text-[32px] font-semibold leading-[1.1] text-indigo-950">
        Featured Products
      </div>
      <div className="flex flex-wrap justify-center gap-11">
      {data.slice(0, 4).map((val ) => (
  <div key={`${val._id}`} className="flex flex-col items-start gap-y-3.5 w-72">
    {/* Product Card Content */}
    <Link
      href={`../details/${val._id}`}
      className="relative h-80 w-full rounded-md bg-cover bg-center"
    >
      <div className="absolute top-4 left-4 rounded bg-green-600 px-2.5 py-1.5 text-center text-[13px] font-medium leading-[1.1] text-white">
        New
      </div>
      <img
        src={val.imageUrl}
        alt={val.title}
        className="h-full w-full object-cover rounded-md"
      />
    </Link>

    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col">
        <div className="text-teal-700 text-sm">{val.title}</div>
        <div className="text-lg font-semibold leading-[1.1] text-indigo-950">
          ${val.price}
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(val)}
        className="flex h-11 w-11 items-center justify-center rounded-lg bg-cadetblue p-2.5 hover:bg-teal-500"
      >
        <Image
          src="/img/cart.png"
          width={24}
          height={24}
          alt="Add to cart"
        />
      </button>
    </div>
  </div>
))}

      </div>
        
         {showModal && (
        <Modal message={modalMessage} onClose={closeModal} />
      )}
    </div>
  );
}
