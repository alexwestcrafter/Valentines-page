import { useState } from 'react'

function Yes() {
  return (
    <>
      <div className='flex items-center justify-center flex-col h-[96vh] w-[100vw] bg-slate-200 text-black'>
        <img src='https://media.tenor.com/i9yvlqt2aYoAAAAi/peach-goma-peach-and-goma.gif'/>
        <p className='p-2 text-red-700 text-lg uppercase'>Thank You</p>
      </div>
      <div className='flex justify-end text-sm bg-slate-200 text-black'>by @alexplays__101</div>
    </>
  )
}

export default Yes