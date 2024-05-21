import React from 'react'
import Testimonial from './Testimonial'
import Button from './Button'
import maskGroup from '../images/MaskGroup.png'
import HeroBackground from '../images/HeroBackground.png'
export default function Testimonials() {
    const Testimonials = [
        {
            id:1,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 5
        },
        {
            id:2,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 5
        },
        {
            id:3,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 5
        },
        {
            id:4,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 4
        },
    ]
  return (
    <div className='py-10 px-20 bg-[#FEF4DE] z-50'>
        <img src={maskGroup} alt="" className='absolute left-0' />
        <h1 className='font-[900] text-6xl text-center'>TESTYMONIALS</h1>
        <div className='grid gap-3 grid-rows-2 grid-cols-2 px-10 py-10'>
            {Testimonials.map(testimonial=>(
                <Testimonial key={testimonial.id} testimonial={testimonial}/>
            ))}
        </div>
        <div className='flex justify-center'>

        <Button text={"Help Me"} bgYellow={true}/>
        </div>
    </div>
  )
}
