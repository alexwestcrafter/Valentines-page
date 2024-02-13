import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className='flex items-center justify-center flex-col h-[96vh] w-[100vw] bg-slate-200 text-black'>
        <img src='https://media.tenor.com/A_2uBfd4se4AAAAi/winnie-the-pooh-pooh-bear.gif'/>
        <p className='p-2 text-red-700'>will you be my valentine?</p>
        <div className='flex items-center gap-3'>
          <button className='p-1 bg-red-400 rounded-sm text-white'><Link to="/yes">Yes</Link></button>
          <button className='p-1 bg-green-500 rounded-sm text-white'><Link to="/No">No</Link></button>
        </div>
      </div>
      <div className='flex justify-end text-sm bg-slate-200 text-black'>by @alexplays__101</div>
    </>
  )
}

export default App
