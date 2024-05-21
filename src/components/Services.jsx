import React from 'react'
import Service from './Service'
import Button from './Button'
export default function Services() {
    const Services = [
      {
        id:1,
        content:require('../images/Service1.png')
      },
      {
        id:2,
        content:require('../images/Service2.png')
      },
      {
        id:3,
        content:require('../images/Service3.png')
      },
      {
        id:4,
        content:require('../images/Service4.png')
      },
      {
        id:5,
        content:require('../images/Service5.png')
      },
      {
        id:6,
        content:require('../images/Service6.png')
      },
      {
        id:7,
        content:require('../images/Service7.png')
      },
      {
        id:8,
        content:require('../images/Service8.png')
      }
      
       
    ]
  return (
    <div className='bg-[#7C4032] py-10 px-44 flex flex-col gap-4 -mt-48 z-50 '>
        <h1 className='font-[900] text-6xl text-center text-white'>SERVICES</h1>
        <div className='grid gap-2 grid-rows-2 grid-cols-4 px-10 py-10'>
            {Services.map(service=>(
                <Service key={service.id} service={service.content}/>
            ))}
        </div>
        <div className='flex justify-center'>

        <Button text={"Help Me"} bgYellow={true}/>
        </div>
    </div>
  )
}
