import React from 'react'
import Service from './Service'
import Button from './Button'
export default function Services() {
    const Services = [
       require('../images/Service1.png'),
       require('../images/Service2.png'),
       require('../images/Service3.png'),
       require('../images/Service4.png'),
       require('../images/Service5.png'),
       require('../images/Service6.png'),
       require('../images/Service7.png'),
       require('../images/Service8.png'),
       
    ]
  return (
    <div className='bg-[#663128] py-10'>
        <h1 className='font-[900] text-6xl text-center text-white'>Services</h1>
        <div className='grid gap-3 grid-rows-2 grid-cols-4 px-10 py-10'>
            {Services.map(service=>(
                <Service service={service}/>
            ))}
        </div>
        <div className='flex justify-center'>

        <Button text={"Help Me"} bgYellow={true}/>
        </div>
    </div>
  )
}