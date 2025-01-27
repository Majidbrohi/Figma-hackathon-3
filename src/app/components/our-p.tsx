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

export default function OurProducts() {
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
    <div
      className={`font-inter flex w-full flex-col gap-y-[74px] pt-4 py-32 capitalize tracking-[0px] text-indigo-950`}
    >
      <div className="flex items-center justify-center pr-px">
        <div className="text-center text-[32px] font-semibold leading-[1.1]">
          Our Products
        </div>
      </div>

      <div className="flex flex-grow flex-wrap items-center justify-center gap-x-4 gap-y-6 leading-[1.3] min-[1910px]:flex-nowrap">
        {data.slice(0, 8).map((val) => (
          <div key={val._id}className="flex flex-col items-start gap-y-3.5 self-stretch">
            {/* Product Image and Details */}
            <Link
              href={`../details/${val._id}`}
              className="bg-image h-80 w-80 flex-shrink-0 rounded-md bg-cover bg-center relative"
            >
              <img
                src={val.imageUrl}
                alt={val.title}
                className="h-[312px] w-[312px] object-cover rounded-md"
              />
            </Link>

            {/* Product Title, Price, and Add to Cart Button */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <div className="text-[teal]">{val.title}</div>
                <div className="text-lg font-semibold text-indigo-950">
                  ${val.price}
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(val)}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-[cadetblue] p-2.5 hover:bg-teal-500"
              >
                <Image
                  src={"/img/cart.png"}
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
