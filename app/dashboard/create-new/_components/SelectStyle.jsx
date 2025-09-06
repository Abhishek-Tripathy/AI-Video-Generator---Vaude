import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({onUserSelect}) {
   const styleOptions = [
      {
         name: "Realistic",
         image: "/real.jpeg"
      },
      {
         name: "Comic",
         image: "/comic.jpeg"
      },
      {
         name: "Cartoon",
         image: "/cartoon.jpeg"
      },
      {
         name: "Water Color",
         image: "/water.jpeg"
      },
      {
         name: "GTA Style",
         image: "/gta.jpeg"
      },
   ]

   const [selectedOption, setSelectedOption] = useState()
  return (
    <div className='mt-7'>
      <h2 className="font-bold text-2xl text-[#8338ec]">Style</h2>
      <p className="text-gray-500">Select your video Style</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-4'>
         {styleOptions?.map((item, index) => 
            <div key={index} className={`relative hover:scale-105 transition-all cursor-pointer rounded-2xl
            ${selectedOption===item.name ? "border-5 border-[#8338ec]" : ""}`}>
               <Image src={item?.image} alt='style image' width={150} height={150} 
               className='h-48 object-cover rounded-lg w-full'
               onClick={()=>{
                  setSelectedOption(item.name)
                  onUserSelect('imageStyle', item.name)
               }}
               />
               <h2 className='absolute p-1 bg-black text-white text-center rounded-b-lg  bottom-0 w-full'>{item.name}</h2>
            </div>
         )}
      </div>
    </div>
  )
}

export default SelectStyle