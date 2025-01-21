import React from 'react'
import Navbar from '../Components/Navbar'
import InputBar from '../Components/InputBar'
import ShowsGallery from '../Components/ShowsGallery'
import MoviesGallery from '../Components/MoviesGallery'

function Movies() {
  return (
    <div className='w-full min-h-screen bg-black'>
        <Navbar/>
        <InputBar/>
        <MoviesGallery/>
    </div>
  )
}

export default Movies