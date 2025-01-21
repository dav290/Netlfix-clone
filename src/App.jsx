import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TvShows from './Pages/TvShows'
import Movies from './Pages/Movies'
import News from './Pages/News'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/TvShows' element={<TvShows/>}/>
      <Route path='/Movies' element={<Movies/>}/>
      <Route path='/News' element={<News/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App