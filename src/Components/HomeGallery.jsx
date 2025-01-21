import React, { useState } from 'react'
import { Infos } from '../dummy'// Importing data from a dummy file
function HomeGallery() {
    // Using React's useState hook to manage the data for the gallery
    const [data,setData]=useState(Infos)
  return (
    <div className='w-full'>
         {/* Section Header */}
    <div className='w-full flex items-center justify-start py-2'>
    <h1 className='text-white font-bold ml-3'>Popular on Netflix</h1>
    </div>
    <div className='w-full flex items-center justify-start gap-1 ml-3'>
     {data.slice(0,5).map((item)=>{
        return(
            <div key={item.id} className='w-64 h-auto flex-shrink-0'>
            <img src={item.primaryImage} alt='Movies' className='w-64 h-auto object-contain'/>
            </div>
        )
     })}
    </div>
    </div>
  )
}

export default HomeGallery
