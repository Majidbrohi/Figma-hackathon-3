// src/app/about/page.tsx
import React from 'react';

// 1. Export GroupProps as a named export (not default)

export default function About() {
  return (
    <div className={`flex w-full flex-col `}>
      {/* About Us Section */}
      <div className="p-10 pt-20 flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-y-10 gap-x-7">
        {/* Text Content */}
        <div className="font-inter flex w-full lg:w-[672px] flex-col items-start gap-y-3 bg-[teal] pb-10 pl-8 pr-8 pt-8 lg:pb-14 lg:pl-16 lg:pr-28 lg:pt-16 leading-normal tracking-[0px] text-white">
          <div className="text-[24px] lg:text-[32px] font-bold leading-normal">
            About Us - Comforty
          </div>
          <p className="text-base lg:text-lg leading-normal">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <div className="flex items-end pt-8 lg:pt-32">
            <div className="bg-neutral-50/10 px-6 py-3 lg:px-8 lg:py-4 text-center text-sm lg:text-base">
              View collection
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          className="h-auto w-full lg:w-[619px] object-cover rounded-lg"
          src="/img/p1.png"
          alt="About Us"
          loading="lazy"
        />
      </div>

      {/* Brand Difference Section */}
      <div className="p-10 pt-20 text-center font-inter text-[24px] lg:text-[32px] font-semibold capitalize text-indigo-950">
        What makes our Brand Different
      </div>

      {/* Features Section */}
      <div className="p-10 flex flex-col lg:flex-row flex-wrap justify-center gap-y-6 gap-x-6">
        {/* Feature Cards */}
        {[
          {
            title: "Next day as standard",
            description:
              "Order before 3pm and get your order the next day as standard",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 flex-shrink-0"
              >
                <path d="M3 4h13v2H3V4zm0 4h13v2H3V8zm0 4h9v2H3v-2zm0 4h9v2H3v-2zm11.293-4.293l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L20 12.586V9a1 1 0 10-2 0v3.586l-2.293-2.293a1 1 0 00-1.414 1.414z" />
              </svg>
            ),
          },
          {
            title: "Made by true artisans",
            description:
              "Handmade crafted goods made with real passion and craftsmanship",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 flex-shrink-0"
              >
                <path d="M10 15l-3-3 1.414-1.414L10 12.172l5.586-5.586L17 8l-7 7z" />
              </svg>
            ),
          },
          {
            title: "Unbeatable prices",
            description:
              "For our materials and quality you wont find better prices anywhere",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 flex-shrink-0"
              >
                <path d="M5 4h14l-1 7H6L5 4zM5 16h14v2H5v-2z" />
              </svg>
            ),
          },
          {
            title: "Recycled packaging",
            description:
              "We use 100% recycled to ensure our footprint is more manageable",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 flex-shrink-0"
              >
                <path d="M12 2a10 10 0 00-6.94 17.06A9.954 9.954 0 0112 20a9.954 9.954 0 016.94-1.94A10 10 0 0012 2zm0 2a8 8 0 110 16 8 8 0 010-16zm-1 4h2v6h-2V8zm0 8h2v2h-2v-2z" />
              </svg>
            ),
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex w-full lg:w-80 flex-shrink-0 flex-col items-start gap-y-3 bg-neutral-50 p-8 lg:p-12"
          >
            {feature.icon}
            <h4 className="text-lg lg:text-xl font-medium leading-[1.4]">
              {feature.title}
            </h4>
            <p className="text-sm lg:text-base leading-normal text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Popular Products Section */}
      <div className="p-28 flex flex-col items-start gap-y-8 ">
        <h2 className="text-[24px] lg:text-[32px] font-semibold text-indigo-950">
          Our Popular Products
        </h2>

        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5">
          {/* Product Cards */}
          {[
            {
              img: "/img/about1.png",
              title: "The Poplar suede sofa",
              price: "$99.00",
              width: "lg:w-[630px]",
            },
            {
              img: "/img/about2.png",
              title: "The Dandy chair",
              price: "$99.00",
              width: "lg:w-[305px]",
            },
            {
              img: "/img/about3.png",
              title: "The Dandy chair",
              price: "$99.00",
              width: "lg:w-[305px]",
            },
          ].map((product, index) => (
            <div
              key={index}
              className={`flex flex-col items-start gap-y-2 w-full ${product.width}`}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <h3 className="text-lg font-medium text-indigo-950">
                {product.title}
              </h3>
              <p className="text-md text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Export GroupProps as a named export using `export type`


// 3. Export About as the default export

