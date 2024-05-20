import React from 'react'
import heroBearImage from '../images/heroBearImage.png';
import Button from './Button';
export default function HeroSection() {
  return (
    <div id='heroSection' className='flex justify-center font-poppins text-[#663128] py-[181px] gap-10'>
        <div id='heroText' className='flex flex-col justify-end gap-5'>
            <div className='flex flex-col'>
                <span className='text-6xl font-[900]'>What the</span>
                <span className='text-4xl tracking-[.25em] font-[700]'>Bear Bears</span>
            </div>
            <div className='w-96 text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </div>
            <div>
                <Button text={"Help Me"} bgYellow={true}/>
                <Button text={"About Us"}/>
            </div>
        </div>
        <div id='heroImage'>
            <img src={heroBearImage} alt="" className='w-80'/>
        </div>

    </div>
  )
}
