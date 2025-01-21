import React from 'react'
import Navbar from '../Components/Navbar'
import InputBar from '../Components/InputBar'
import ShowsGallery from '../Components/ShowsGallery'
import NewsGallery from '../Components/NewsGallery'

function News() {
  return (
    <div className='w-full min-h-screen bg-black'>
        <Navbar/>
        <InputBar/>
        <NewsGallery/>
    </div>
  )
}

export default News