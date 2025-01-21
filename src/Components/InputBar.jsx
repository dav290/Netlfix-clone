import { Search } from '@mui/icons-material'
import React from 'react'

function InputBar() {
  return (
    <div className='w-2/4 h-12 mx-auto my-5 bg-white flex items-center rounded-3xl'>
    <input className='flex-1 bg-transparent border-none outline-none px-3' placeholder='Type your search...'/>
    <Search sx={{mx:2}}/>
    </div>
  )
}

export default InputBar