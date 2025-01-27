export default function Header() {
    return (
      <div className={`flex w-full items-start px-24 `}>
        <div className="flex h-full w-full flex-shrink-0 flex-col overflow-clip">
          <div className="font-inter relative flex w-[1740px] flex-grow flex-col items-start gap-y-6 rounded-b-[48px] bg-gray-100 pb-72 sm:pl-[70px] pl-[20px] pr-[1113px] pt-56 text-indigo-950">
            <img
              className="absolute xl:left-[calc(50%_+_-292px_+_199px)] xl:top-[calc(50%_+_-292px_+_-18px)] xl:h-[584px] xl:w-[434px] flex-shrink-0 object-cover object-center bottom-5 w-[150px] h-[150px] sm:right-0 sm:w-[250px] sm:h-[250px]"
              src="/img/Product-Image.png"  
            />
            <div className="xl:text-sm sm:text-[15px] text-[10px] uppercase leading-none tracking-[1.92px]">
              Welcome to chairy
            </div>
            <div className="self-stretch text[20px] lx:text-[60px] sm:text-[40px] font-bold capitalize leading-[1.1] tracking-[0px]">
              <span>
                <p>Best Furniture</p>
                <p>Collection for your</p>
                <p>interior.</p>
              </span>
            </div>
            <div className="flex items-end pt-6">
              <div className="flex items-center justify-center gap-x-5 rounded-lg bg-[cadetblue] px-6 py-3.5">
                <div className="font-semibold capitalize leading-[1.1] tracking-[0px] text-white text-[10px] sm:text-[15px] xl:text-[20px]">
                  Shop Now
                </div>
                <svg
                  className="h-6 w-6 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  