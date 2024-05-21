import React from 'react'
import call from '../images/ic_round-call.png'
import mail from '../images/ic_round-mail.png'
import location from '../images/ic_round-location-on.png'

export default function ContactUs() {
    const inputFields = [
        {
            id:1,
            type:'text',
            placeHolder:'Name',
            name:'name'
        },
        {
            id:2,
            type:'email',
            placeHolder:'Email',
            name:'email'
        },
        {
            id:3,
            type:'text',
            placeHolder:'Message',
            name:'message'
        },
    ]
    const contacts = [
        {
            id:1,
            icon:mail,
            text:"test@gmail.com"
        },
        {
            id:2,
            icon:call,
            text:"(303) 555-0105"
        },
        {
            id:3,
            icon:location,
            text:"2715 Ash Dr. San Jose, South Dakota 83475"
        },
    ]
  return (
    <div className='py-10'>
        <h1 className='font-[900] text-6xl text-center mb-12'>CONTACT US</h1>
        <div className='flex justify-center gap-24 my-10'>
            <form className='flex flex-col gap-2 items-center'>
                {inputFields.map(field=>(
                    <input key={field.id} type={field.type} name={field.name} placeHolder={field.placeHolder} className='bg-[#E5AF99] rounded-full w-[374px] h-14 px-2 py-1  placeholder-[#7C4032]'/>
                ))}
                <button type='submit' className='border border-[#55352D] rounded-full w-20 text-center py-2'>Send</button>
            </form>
            <div className='flex flex-col gap-2'>
                {contacts.map(contact=>(
                    <div key={contact.id} className='flex gap-5 h-14 items-center'>
                        <img src={contact.icon} alt="" />
                        <div>{contact.text}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
