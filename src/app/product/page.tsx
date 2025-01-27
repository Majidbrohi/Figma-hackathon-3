"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Modal from "../components/Modal";

// Define types for the data
interface BlogData {
  title: string;
  imageUrl: string;
  _id: string;
  price: number;
  description: string;
}

const opens = Open_Sans({ subsets: ["latin"] });

export default function Products() {
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
    <div className="font-inter">
      {/* Product List Section */}
      <div className="flex flex-col items-start gap-y-11 px-5 md:px-20 py-20">
        <h1 className="text-[32px] font-semibold leading-[1.1] text-indigo-950">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.slice(0, 12).map((val, i) => (
  <div key={`${val._id}-${i}`} className="flex flex-col items-start gap-4">
    <Link
      href={`../details/${val._id}`}
      className="relative h-80 w-80 rounded-md overflow-hidden shadow-md"
    >
      <img
        src={val.imageUrl}
        alt={val.title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/img/placeholder.png"; // Fallback image
        }}
        className="h-full w-full object-cover"
      />
    </Link>
    <div className="flex items-center justify-between w-full">
      <div>
        <h3 className="text-teal-700 text-sm">{val.title}</h3>
        <p className="text-lg font-semibold text-indigo-950">
          ${val.price.toFixed(2)}
        </p>
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
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 px-5 sm:px-10 py-24 text-center">
        <h2 className="text-[30px] sm:text-[50px] font-semibold capitalize">
          Or subscribe to the newsletter
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Email address..."
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg border-b-2 border-black bg-gray-100 px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              className={`${opens.className} bg-gray-100 border-b-2 border-black px-6 py-2 text-sm font-normal text-black hover:bg-gray-200`}
            >
              SUBMIT
            </button>
          </div>
        </div>

        {/* Instagram Section */}
        <h2 className="mt-16 text-[30px] sm:text-[50px] font-semibold">
          Follow products and discounts on Instagram
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.slice(0, 6).map((val, i) => (
            <Link key={`${val._id}-${i}`} href={`../details/${val._id}`}>
              <img
                src={val.imageUrl}
                alt="Instagram Post"
                className="h-52 w-52 rounded-md object-cover"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal message={modalMessage} onClose={closeModal} />
      )}
    </div>
  );
}
