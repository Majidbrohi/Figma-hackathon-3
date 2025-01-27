import Image from "next/image";

export default function Footer() {
  return (
    <footer className={`w-full tracking-normal text-indigo-950 `}>
      <div className="font-inter bg-white pb-10 pt-10 shadow-inner">
        <div className="flex flex-wrap justify-between gap-12 px-6 sm:px-10 lg:px-32">
          {/* Company Info */}
          <div className="flex flex-col space-y-7 max-w-xs">
            <div className="flex items-center gap-2">
              <Image src={"/img/lo.png"} width={40} height={40} alt="logo" />
              <span className="text-2xl font-semibold">Comforty</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Vivamus tristique odi sit amet velit semper,
              <br />
              eu posuere turpis interdum. <br />
              Cras egetas purs.
            </p>
            <div className="flex gap-4">
              <Image src={"/img/flogo.png"} width={38} height={38} alt="Facebook" />
              <Image src={"/img/tlogo.png"} width={38} height={38} alt="Twitter" />
              <Image src={"/img/ilogo.png"} width={38} height={38} alt="Instagram" />
              <Image src={"/img/plogo.png"} width={38} height={38} alt="Pinterest" />
              <Image src={"/img/ylogo.png"} width={38} height={38} alt="YouTube" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-auto">
            <h3 className="text-sm font-medium uppercase text-gray-500">Category</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
              <li className="text-[teal] underline">Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h3 className="text-sm font-medium uppercase text-gray-500">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>Help & Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-full sm:max-w-sm w-full">
            <h3 className="text-sm font-medium uppercase text-gray-500">Newsletter</h3>
            <form className="mt-4 flex flex-wrap gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-gray-300 p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="rounded-lg bg-teal-600 px-6 py-3 text-white">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-wrap justify-between items-center border-t pt-6 px-6 sm:px-10 lg:px-32 gap-6">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2021 Comforty - Designed & Developed by <span className="text-indigo-500">Abdul Majid Brohi</span>
          </p>
          <div className="flex items-center justify-center opacity-50">
            <Image src={"/img/Logos.png"} width={227} height={27} alt="Payment Logos" />
          </div>
        </div>
      </div>
    </footer>
  );
}

