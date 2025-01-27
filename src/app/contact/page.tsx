import Image from "next/image";

export default function Group() {
  return (
    <div className={`flex w-full flex-col `}>
      <div className="flex flex-grow flex-col items-center justify-end gap-y-[7px] bg-white px-8 pt-24 leading-[normal] tracking-[0px] sm:px-24 lg:px-48">
        <div className="flex items-center justify-center self-stretch pl-px">
          <div className="font-poppins text-center text-3xl sm:text-4xl font-semibold leading-[normal]">
            Get In Touch With Us
          </div>
        </div>
        <div className="font-poppins flex w-full sm:w-[644px] items-center justify-center text-center text-neutral-400">
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex flex-grow flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] self-stretch pt-[20px] sm:flex-nowrap">
          <div className="flex flex-col items-center justify-end pt-[10px]">
            <div className="font-inter flex flex-col items-center gap-y-[52px] bg-white pb-[91px] pl-12 pr-[75px] pt-12">
              <div className="flex items-start justify-center gap-x-[30px] pl-2 pt-3">
                <div className="flex h-4 flex-col items-center">
                  {/* Vector SVG */}
                  <Image src={'/img/Vector1.png'} width={24} height={24} alt=""/>
                </div>
                <div className="flex-grow [max-width:212px]">
                  <div className="font-poppins text-2xl font-medium leading-[normal]">
                    Address
                  </div>
                  <div className="flex items-start self-stretch">
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-[30px] pr-10">
                <div className="flex flex-col items-center pt-[3px]">
                  {/* BxsPhone SVG */}
                  <Image src={'/img/Vector2.png'} width={24} height={24} alt=""/>
                </div>
                <div className="flex-grow [max-width:212px]">
                  <div className="font-poppins text-2xl font-medium leading-[normal]">
                    Phone
                  </div>
                  <div className="self-stretch">
                    <span>
                      <p>Mobile: +(84) 546-6789</p>
                      <p>Hotline: +(84) 456-6789</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-[30px] pl-[7px]">
                <div className="flex flex-col items-center justify-end pt-1.5">
                  {/* BiClockFill SVG */}
                  <Image src={'/img/Vector3.png'} width={24} height={24} alt=""/>
                </div>
                <div className="flex-grow [max-width:212px]">
                  <div className="font-poppins text-2xl font-medium leading-[normal]">
                    Working Time
                  </div>
                  <div className="self-stretch">
                    <span>
                      <p>Monday-Friday: 9:00 - 22:00</p>
                      <p>Saturday-Sunday: 9:00 - 21:00</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins flex w-full sm:w-[635px] flex-shrink-0 flex-col items-start justify-end gap-y-[22px] self-stretch bg-white px-[52px] py-16">
            <div className="flex items-center self-stretch px-px [max-width:531px]">
              <div className="flex-grow font-medium">Your name</div>
            </div>
            <div className="flex flex-col items-center pl-[2.3px]">
              <div className="flex items-center rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 md:pr-[466px] pr-[120px]">
                <div className="text-neutral-400">Abc</div>
              </div>
            </div>
            <div className="flex items-end self-stretch px-px pt-3.5 [max-width:531px]">
              <div className="flex-grow font-medium">Email address</div>
            </div>
            <div className="flex flex-col items-center pl-[2.3px]">
              <div className="flex items-center rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 md:pr-96 pr-[120px]">
                <div className="text-neutral-400">Abc@def.com</div>
              </div>
            </div>
            <div className="flex items-end self-stretch px-[3px] pt-3.5 [max-width:531px]">
              <div className="flex-grow font-medium">Subject</div>
            </div>
            <div className="flex items-center justify-center self-stretch pl-1">
              <div className="flex items-center rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 md:pr-[352px] pr-[120px]">
                <div className="text-neutral-400">This is an optional</div>
              </div>
            </div>
            <div className="pt-3.5 font-medium">Message</div>
            <div className="flex flex-col items-center pl-px pr-[3px]">
              <div className="flex items-start rounded-[10px] border border-solid border-neutral-400 bg-white pb-[69px] pl-7 md:pr-80 pr-[120px] pt-6">
                <div className="text-neutral-400">Hi! id like to ask about</div>
              </div>
            </div>
            <div className="flex items-end px-[7px] pt-7">
              <div className="flex items-center justify-center rounded-[5px] border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-[#1eabb0] px-[88px] py-[13px]">
                <div className="text-center text-white">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F4F4] mx-8 sm:mx-32 my-10 h-[270px] font-poppins flex flex-wrap items-center justify-center gap-x-8 gap-y-9 leading-normal tracking-[0px] min-[1310px]:flex-nowrap">
        {/* High Quality Section */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1310px]:flex-nowrap">
          <Image src={'/img/con1.png'} width={60} height={60} alt=""/>
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800">
              High Quality
            </div>
            <div className="text-xl font-medium leading-normal text-[gray]">
              Crafted from top materials
            </div>
          </div>
        </div>

        {/* Warranty Protection Section */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1310px]:flex-nowrap">
          <Image src={'/img/con2.png'} width={60} height={60} alt=""/>
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800">
              Warranty Protection
            </div>
            <div className="text-xl font-medium leading-normal text-[gray]">
              Over 2 years
            </div>
          </div>
        </div>

        {/* 24/7 Support Section */}
        <div className="flex items-center justify-center gap-x-2.5">
          <Image src={'/img/con3.png'} width={60} height={60} alt=""/>
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800">
              24 / 7 Support
            </div>
            <div className="text-xl font-medium leading-normal text-[gray]">
              Dedicated support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

