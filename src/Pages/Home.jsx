import React from 'react'
import image from '../assets/Image.jpeg'
import Navbar from '../Components/Navbar'
import HomeText from '../Components/HomeText'
import HomeGallery from '../Components/HomeGallery'

function Home() {
  return (
    <div className='w-full min-h-screen relative'>
   <div className='absolute inset-0 bg-black bg-opacity-50 z-10'>
  <div style={{backgroundImage:`url(${image})`}} className='bg-center bg-no-repeat bg-cover min-h-screen'>
  <Navbar/>
  <HomeText/>
  <HomeGallery/>
  </div>
   </div>

    </div>
  )
}

export default Home