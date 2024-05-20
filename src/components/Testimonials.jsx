import React from 'react'
import Testimonial from './Testimonial'
import Button from './Button'
export default function Testimonials() {
    const Testimonials = [
        {
            id:1,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 5
        },
        {
            id:1,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 5
        },
        {
            id:1,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 5
        },
        {
            id:1,
            name:'Kathryn Murphy',
            message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            rating: 4
        },
    ]
  return (
    <div className='py-10 px-20'>
        <h1 className='font-[900] text-6xl text-center'>Testimonials</h1>
        <div className='grid gap-3 grid-rows-2 grid-cols-2 px-10 py-10'>
            {Testimonials.map(testimonial=>(
                <Testimonial testimonial={testimonial}/>
            ))}
        </div>
        <div className='flex justify-center'>

        <Button text={"Help Me"} bgYellow={true}/>
        </div>
    </div>
  )
}