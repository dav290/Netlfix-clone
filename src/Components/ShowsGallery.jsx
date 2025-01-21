import React, { useState } from 'react'
import { Infos } from '../dummy'
function ShowsGallery() {
    const [data,setData]=useState(Infos)
  return (
    <div className='w-full'>
    <div className='w-full flex items-center justify-start py-2'>
    <h1 className='text-white font-bold ml-3'>Top Tv Shows in the US</h1>
    </div>
    <div className='w-full flex items-center justify-start gap-1 ml-3'>
     {data.slice(5,10).map((item)=>{
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

export default ShowsGallery