import React from 'react'
import Navbar from '../Components/Navbar'
import InputBar from '../Components/InputBar'
import ShowsGallery from '../Components/ShowsGallery'

function TvShows() {
  return (
    <div className='w-full min-h-screen bg-black'>
        <Navbar/>
        <InputBar/>
        <ShowsGallery/>
    </div>
  )
}

export default TvShows