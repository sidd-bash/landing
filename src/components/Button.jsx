import React from 'react'

export default function Button({text,bgYellow}) {
  return (
    <button className={`px-16 py-5 rounded-full ${bgYellow && 'bg-[#F3CE5E]'}`}>{text}</button>
  )
}
