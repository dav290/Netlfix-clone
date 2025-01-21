import React, { useState } from 'react'
import { Infos } from '../dummy' // Importing the data source from a dummy file

function MoviesGallery() {
    // Using React's useState hook to manage and initialize the data for the gallery
    const [data, setData] = useState(Infos)

    return (
        <div className='w-full'>
            {/* Section Header */}
            <div className='w-full flex items-center justify-start py-2'>
                <h1 className='text-white font-bold ml-3'>Trending Movies</h1>
            </div>

            {/* Gallery Container */}
            <div className='w-full flex items-center justify-start gap-1 ml-3'>
                {/* Looping through the data array to display movies 11 through 15 */}
                {data.slice(10, 15).map((item) => {
                    return (
                        // Render each movie item with a unique key
                        <div key={item.id} className='w-64 h-auto flex-shrink-0'>
                            {/* Displaying the movie's primary image */}
                            <img 
                                src={item.primaryImage} 
                                alt='Movies' 
                                className='w-64 h-auto object-contain' 
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesGallery
