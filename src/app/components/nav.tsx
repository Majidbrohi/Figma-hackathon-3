import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div
      className={`font-inter w-full bg-white capitalize leading-[1.1] tracking-[0px]`}
    >
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between bg-indigo-950 px-6 py-3 text-[13px] text-white sm:px-10 lg:px-32">
        <div className="flex items-center gap-x-2 opacity-70">
          <svg
            className="h-4 w-4 flex-shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 19.4l-6.6-6.6L5.4 10l3.6 3.6L18.6 4 21 6.4 9 19.4z"
              fill="currentColor"
            />
          </svg>
          <div>Free shipping on all orders over $50</div>
        </div>
        <div className="flex items-center gap-x-4 opacity-70">
          <div>Eng</div>
          <div>Faqs</div>
          <div>Need Help</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-y-4 bg-gray-100 px-6 py-5 font-medium text-indigo-950 sm:px-10 lg:flex-nowrap lg:px-32">
        <div className="flex items-center justify-center gap-x-2">
        <Image src={"/img/lo.png"} width={40} height={40} alt="logo" />
          <div className="text-[22px] leading-[1.2] sm:text-[26px]">Comforty</div>
        </div>
        <Link href="../cart">
          <div className="flex items-center gap-x-2 rounded-lg bg-white px-4 py-[11px]">
            <svg
              className="h-[22px] w-[22px] flex-shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 4h16l-1.5 9H5.5L4 4z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="7"
                cy="18"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="17"
                cy="18"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <div className="text-xs leading-[1.1]">Cart</div>
            <div className="flex items-center justify-center px-[7px] py-[5px]">
              <div className="relative z-0 flex h-2.5 w-2.5 items-center pl-1">
                <div className="absolute bottom-[-5px] right-[-7px] top-[-5px] z-0 w-5 rounded-full bg-indigo-500"></div>
                <div className="font-dm-sans z-[2] text-[10px] leading-none text-white">
              
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Links and Contact */}
      <div className="flex flex-wrap items-center justify-between px-6 py-[20px] text-sm font-medium leading-[1.1] text-zinc-500 sm:px-10 lg:px-32 lg:py-[30px]">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-8">
          <div className="hover:text-[teal] hover:font-bold">
            <Link href="/">Home</Link>
          </div>
          <div className="hover:text-[teal] hover:font-bold">
            <Link href="../product">Product</Link>
          </div>
          <div className="hover:text-[teal] hover:font-bold">
            <Link href="../contact">Contact Us</Link>
          </div>
          <div className="hover:text-[teal] hover:font-bold">
            <Link href="../about">About</Link>
          </div>
          <div className="hover:text-[teal] hover:font-bold">
            <Link href="../faq">FAQ</Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 text-zinc-500">
          <div>Contact:</div>
          <div className="text-indigo-950">(808) 555-0111</div>
        </div>
      </div>

      <hr />
    </div>
  );
}


