'use client';

import Modal from "@/app/components/Modal";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import {use, useEffect, useState } from "react";

const Page = ({ params }) => {
  const unwrappedParams = use(params); // Use the `use` hook to unwrap the Promise
  const { _id } = unwrappedParams;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for the specific product using _id
        const result = await client.fetch(
          `*[_type == "products" && _id == $id]{
            title,
            "imageUrl": image.asset->url,
            price,
            description,
            _id
          }[0]`,
          { id: _id }
        );
        setData(result);

        // Fetch data for featured products
        const featuredData = await client.fetch(
          `*[_type == 'products']{
            title,
            price,
            inventory,
            _id,
            "imageUrl": image.asset->url,
            description,
          }`
        );
        setData1(featuredData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item._id === product._id);

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

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Product not found!</div>;

  return (
    <div className="flex w-full flex-col px-6 py-12 md:px-28">
      <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-x-24 px-4 gap-y-16 md:gap-y-28">
        {/* Image Section */}
        <img
          className="w-full md:w-[675px] h-[350px] md:h-[607px] rounded-lg object-cover object-center"
          src={data.imageUrl}
          loading="lazy"
          alt={data.title}
        />

        {/* Text and Details Section */}
        <div className="font-inter flex flex-grow flex-col items-start gap-y-8 tracking-[0px] text-black max-w-[545px]">
          {/* Title */}
          <div className="text-4xl md:text-[60px] font-bold capitalize leading-[1.1]">
            {data.title}
          </div>

          {/* Price */}
          <div className="bg-[#1eabb0] px-4 py-2 text-center text-xl font-semibold text-white">
            ${data.price} USD
          </div>

          {/* Description */}
          <div className="self-stretch pl-0.5 pt-7">
            <div className="text-xl md:text-[22px] text-[#272343] font-normal">
              {data.description}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center mt-6">
            <div
              onClick={() => handleAddToCart(data)}
              className="flex items-center gap-x-[9px] rounded-lg bg-[#1eabb0] px-7 py-[17px] cursor-pointer"
            >
              <Image src="/img/cart2.png" width={29} height={29} alt="Cart" />
              <div className="text-xl font-semibold text-white">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="pt-16 md:pt-36 flex items-center justify-between gap-x-8 font-bold leading-[normal] text-2xl md:text-[28px] uppercase tracking-[3.2px]">
        <div>Featured Products</div>
        <div className="flex flex-col items-center gap-y-[7px]">
          <a href="../product">
            <div className="text-lg text-center">View all</div>
          </a>
          {/* Divider Line */}
          <div className="h-0.5 bg-gray-400 w-full"></div>
        </div>
      </div>

      {/* Product Items Section */}
      <div className="pt-12 md:pt-20 flex flex-wrap items-center justify-center gap-x-2 pb-28 gap-y-6 md:gap-y-[26px] capitalize leading-[1.3] text-black">
        {/* Product Card 1 */}
        {data1.slice(0, 5).map((val) => (
          <Link key={val._id} href={`../details/${val._id}`}>
            <div className="flex flex-col items-start gap-y-3.5 w-full md:w-[250px]">
              <div className="bg-image h-[270px] w-full md:w-[250px] rounded-md bg-cover bg-center">
                <img
                  src={val.imageUrl}
                  alt={val.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between w-full mt-3">
                <div className="text-indigo-950 text-sm md:text-base">
                  {val.title}
                </div>
                <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-[#ffffff] text-black text-lg font-semibold">
                  ${val.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default Page;
