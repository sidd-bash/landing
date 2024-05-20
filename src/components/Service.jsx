import React from 'react'

export default function Service({service}) {
  return (
    <div className='flex w-[288px] bg-white rounded-xl h-[269px] px-4 items-center justify-center'>
        <img src={service} alt="" />
    </div>
  )
}
