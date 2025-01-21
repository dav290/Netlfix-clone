import React from 'react'
import {PlayArrow,MoreVertRounded} from '@mui/icons-material'
function HomeText() {
  return (
    <div className='w-2/4 items-center mt-2 flex mi-h-96 flex-col justify-center py-10'>
<div className='w-3/4 m-auto'>
<h1 className='text-red-700 text-3xl font-medium ml-10'>N
    <span className='text-white font-mono text-xl mx-2'>
    SERIES</span></h1>
    <h1 className='text-white text-3xl my-4'>The Walking Dead</h1>
    <h2 className='text-white text-2xl font-bold mb-3'>
        <span className='text-red-700'>#</span> 1 in Tv Shows today</h2>
        <p className='text-white mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Alias culpa error ex corporis ipsa impedit laboriosam nobis, sunt delectus repellendus natus, 
            possimus explicabo rerum quo nostrum temporibus totam esse! Quae?</p>
</div>
<div className='w-3/4 flex gap-5 m-auto'>
<div className='w-40 px-2 h-11 bg-slate-100 font-bold text-xl flex gap-1 items-center justify-center cursor-pointer'>
<PlayArrow style={{fontSize:'32px'}}/>
<button>
    Play
</button>
</div>
<div className='w-56 px-6 h-11 text-xl bg-zinc-500 font-bold text-white flex items-center justify-center gap-2 cursor-pointer'>
<MoreVertRounded style=
{{fontSize:'24px',borderRadius:'50%',
padding:'2px',borderWidth:'2px',borderColor:'white',borderStyle:'solid'}}/>
<button>More Info</button>
</div>
</div>
    </div>
  )
}

export default HomeText