import React from 'react'
import { NavLink } from 'react-router-dom' // Importing NavLink from react-router-dom to manage navigation

function Navbar() {
    // Defining common classes for the links and the active link
    const linkClasses = 'text-white text-lg'  // Base link style
    const activeLinkClasses = 'font-bold'    // Style for the active link (bold)

    return (
        <div className='w-full bg-black h-1/4 flex items-center justify-between py-3 bg-opacity-50 z-10'>
            {/* Navbar Title */}
            <div className='w-1/4 text-center'>
                <h1 className='text-red-700 text-3xl'>Netflix</h1> {/* Displaying the Netflix title */}
            </div>

            {/* Navbar Links */}
            <div className='w-2/4 h-full items-center flex justify-around'>
                {/* Navigation Link for Home */}
                <NavLink 
                    to='/' 
                    className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`} 
                >
                    Home
                </NavLink>

                {/* Navigation Link for TV Shows */}
                <NavLink 
                    to='/TvShows' 
                    className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}
                >
                    TvShows
                </NavLink>

                {/* Navigation Link for Movies */}
                <NavLink 
                    to='/Movies' 
                    className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}
                >
                    Movies
                </NavLink>

                {/* Navigation Link for New and Popular */}
                <NavLink 
                    to='/News' 
                    className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ""}`}
                >
                    New and Popular
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
