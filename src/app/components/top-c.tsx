"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";


// Define types for the data
interface BlogData {
  title: string;
  imageUrl: string;
  products:number;
}
export default function TopCategories() {
    const [data, setData] = useState<BlogData[]>([]);
  
    // Fetch data on component mount
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await client.fetch(`*[_type == 'categories']{
  title,
    "imageUrl": image.asset->url,
      products
}`);
          setData(result); // Store the fetched data in state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    return (
      <div
        className={`font-inter flex w-full flex-col items-start gap-y-11 pt-[4.5px] capitalize leading-[1.1] tracking-[0px] py-20 md:px-24 px-5`}
      >
        <div className="text-[32px] font-semibold leading-[1.1] text-indigo-950 pb-10">
          Top categories
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white">
          {/* Category 1 */}
          {data.slice(0, 4).map((val, i) => (
          <div
          key={i}
            className="h-[300px] md:h-[424px] w-[300px] md:w-[424px] rounded-[10px] flex flex-col items-center justify-end bg-cover bg-center pt-16"
          >  <img
          src={val.imageUrl}
          alt="img"
          className="h-full w-full object-cover rounded-md"
        />
            <div className="bg-black/70 w-full p-3 rounded-b-[10px]">
              <div className="text-xl font-bold">{val.title}</div>
              <div className="text-sm">{val.products}</div>
            </div>
          </div> ))}
          
        </div>
      </div>
    );
  }
  
