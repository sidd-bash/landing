import React from 'react'

export default function Service({service}) {
  return (
    <div className='flex w-[200px] bg-white rounded-xl h-[200px] px-4 items-center justify-center bg-white'>
        <img src={service} alt="" />
    </div>
  )
}
