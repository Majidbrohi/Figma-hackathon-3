"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";


// Define types for the data
interface BlogData {
  title: string;
  imageUrl: string;
  currentSlug: string;
  price:number;
  description: string;
}

export default function HotCategory() {
  const [data, setData] = useState<BlogData[]>([]);
    
      // Fetch data on component mount
      useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await client.fetch(`*[_id in ["9sdhlauaGukhCl9Bj1Yckt","9sdhlauaGukhCl9Bj1YjHX", "PHYRau07g0l5Y4L0Wy5KGr", "PHYRau07g0l5Y4L0Wy5OJM"]]{
              "imageUrl": image.asset->url,
              }
`);
            setData(result); // Store the fetched data in state
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    return (
      <div className={`flex w-full flex-col items-end `}>
        <div className="flex w-full flex-grow flex-wrap items-center justify-center min-[1310px]:flex-nowrap py-28" >
          <div className="relative h-[648px] w-[52px] flex-shrink-0">
            <div className="font-roboto absolute left-0 top-[648px] flex h-[52px] w-[648px] origin-top-left items-start justify-center text-center text-[34px] uppercase leading-[normal] tracking-[0px] [transform:rotate(-90deg)]" >
              <p>Explore new and popular styles</p>
            </div>
          </div>
          <div  className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0 self-stretch min-[1310px]:flex-nowrap" >
          {data.slice(0,1).map((val, i) => (
            <img
            key={i}
              className="md:h-[648px] h-[324px] md:w-[648px] w-[324px] flex-shrink-0 object-cover object-center"
              src={val.imageUrl}
              loading="lazy"
             />))}
             
              <div className="flex gap-4">
             
            <div  className="flex flex-col gap-y-6 self-stretch justify-center  ">
               {data.slice(1,3).map((val, i) => (
              <img key={i} 
                className="md:h-[312] h-[100]  md:w-[312] w-[100] flex-shrink-0 object-cover object-center"
                src={val.imageUrl}
                loading="lazy"
               />))}
            </div>
            <div className="flex flex-col gap-y-6 self-stretch justify-center ">
            {data.slice(2,4).map((val, i) => (
              <img key={i} 
                className="md:h-[312] h-[100]  md:w-[312] w-[100] flex-shrink-0 object-cover object-center"
                src={val.imageUrl}
                loading="lazy"
               />))}

            </div>
            </div>
          </div>
          </div>
        </div>
     
    );
  }
  
 