import React, { useState } from 'react'
import { Infos } from '../dummy' // Importing dummy data from 'dummy.js' file

function NewsGallery() {
    // Using state to hold and manage the data
    const [data, setData] = useState(Infos)

    return (
        <div className='w-full'>
            {/* Section Title for New and Popular */}
            <div className='w-full flex items-center justify-start py-2'>
                <h1 className='text-white font-bold ml-3'>New and Popular</h1> {/* Displaying the section title */}
            </div>

            {/* Image Gallery */}
            <div className='w-full flex items-center justify-start gap-1 ml-3'>
                {/* Mapping through the 'data' array and displaying images */}
                {data.slice(15, 20).map((item) => {
                    return (
                        <div key={item.id} className='w-64 h-auto flex-shrink-0'>
                            <img src={item.primaryImage} alt='Movies' className='w-64 h-auto object-contain' /> {/* Displaying movie image */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewsGallery
