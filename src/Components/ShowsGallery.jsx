import React, { useState } from 'react'
import { Infos } from '../dummy' // Importing dummy data for the gallery

function ShowsGallery() {
    // Initializing state with 'Infos' data
    const [data, setData] = useState(Infos)

    return (
        <div className='w-full'>
            {/* Section Title for Top TV Shows */}
            <div className='w-full flex items-center justify-start py-2'>
                <h1 className='text-white font-bold ml-3'>Top Tv Shows in the US</h1> {/* Displaying the section title */}
            </div>

            {/* Gallery of TV Shows */}
            <div className='w-full flex items-center justify-start gap-1 ml-3'>
                {/* Mapping through 'data' array to display TV show images */}
                {data.slice(5, 10).map((item) => {
                    return (
                        <div key={item.id} className='w-64 h-auto flex-shrink-0'>
                            {/* Displaying TV show image */}
                            <img src={item.primaryImage} alt='Movies' className='w-64 h-auto object-contain' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowsGallery
