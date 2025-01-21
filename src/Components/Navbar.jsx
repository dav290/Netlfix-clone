import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const linkClasses='text-white text-lg'
    const activeLinkClasses='font-bold'
  return (
    <div className='w-full bg-black h-1/4 flex items-center justify-between py-3 bg-opacity-50 z-10'>
   <div className='w-1/4 text-center'>
   <h1 className='text-red-700 text-3xl'>Netflix</h1>
   </div>
<div className='w-2/4 h-full items-center  flex justify-around'>
 <NavLink to='/'
 className={({isActive})=> `${linkClasses} ${isActive? activeLinkClasses:""}`}
 
 >
  Home

 </NavLink>
  
 <NavLink to='/TvShows'
 className={({isActive})=> `${linkClasses} ${isActive? activeLinkClasses:""}`}
 
 >
  TvShows

 </NavLink>
 <NavLink to='/Movies'
 className={({isActive})=> `${linkClasses} ${isActive? activeLinkClasses:""}`}
 
 >
  Movies

 </NavLink>
 <NavLink to='/News'
 className={({isActive})=> `${linkClasses} ${isActive? activeLinkClasses:""}`}
 
 >
  New and Popular

 </NavLink>
</div>
   



    </div>
  )
}

export default Navbar