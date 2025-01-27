export default function FAQ() {
    return (
      <div
        className={`p-8 lg:p-28 font-inter flex w-full flex-col items-center gap-y-5 leading-6 tracking-[0px] text-neutral-600 `}
      >
        <div className="font-helvetica text-center text-4xl lg:text-5xl font-bold leading-[56px] text-neutral-800">
          Questions Looks Here
        </div>
        <div className="flex items-center justify-center self-stretch pr-px">
          <div className="text-center text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-6 gap-y-6 self-stretch pt-[51px]">
          <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
            {/* FAQ 1 */}
            <div className="flex flex-col items-start justify-center gap-y-6 rounded-lg bg-neutral-100 p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="text-lg font-bold leading-[26px] text-neutral-800">
                  What types of chairs do you offer?
                </div>
                <div className="z-0 flex h-6 w-6 flex-shrink-0 flex-col items-center">
                  {/* Plus Icon as SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                  veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                  quidem?
                </p>
              </div>
            </div>
  
            {/* FAQ 2 */}
            <div className="flex flex-col items-start justify-center gap-y-6 rounded-lg bg-neutral-100 p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="text-lg font-bold leading-[26px] text-neutral-800">
                  Do your chairs come with a warranty?
                </div>
                <div className="h-6 w-6 flex-shrink-0">
                  {/* Plus Icon as SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                  veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                  quidem?
                </p>
              </div>
            </div>
  
            <div className="flex flex-col items-start justify-center gap-y-6 rounded-lg bg-neutral-100 p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="text-lg font-bold leading-[26px] text-neutral-800">
                  Can I try a chair before purchasing?
                </div>
                <div className="h-6 w-6 flex-shrink-0">
                  {/* Plus Icon as SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                  veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                  quidem?
                </p>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
            {/* FAQ 4 */}
            <div className="flex flex-col items-start justify-center gap-y-6 rounded-lg bg-neutral-100 p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="text-lg font-bold leading-[26px] text-neutral-800">
                  How can we get in touch with you?
                </div>
                <div className="z-0 flex h-6 w-6 flex-shrink-0 flex-col items-center">
                  {/* Plus Icon as SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                  veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                  quidem?
                </p>
              </div>
            </div>
  
            {/* FAQ 5 */}
            <div className="flex flex-col items-start justify-center gap-y-6 rounded-lg bg-neutral-100 p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="text-lg font-bold leading-[26px] text-neutral-800">
                  What will be delivered? And When?
                </div>
                <div className="h-6 w-6 flex-shrink-0">
                  {/* Plus Icon as SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                  veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                  quidem?
                </p>
              </div>
            </div>
  
            {/* FAQ 6 */}
            <div className="flex flex-col items-start justify-center gap-y-6 rounded-lg bg-neutral-100 p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                <div className="text-lg font-bold leading-[26px] text-neutral-800">
                  How do I clean and maintain my Comforty chair?
                </div>
                <div className="h-6 w-6 flex-shrink-0">
                  {/* Plus Icon as SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                  veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                  quidem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
