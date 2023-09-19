import React from 'react'
import { images } from '../../../assets'

type Props = {
  title: string
  link: string
}

export default function projectList({ title, link }: Props) {
  return (
    <div className='flex items-center space-x-3'>
      <img src={images.fileicon} alt="" />

      <a href={link}>
        <p className='text-[#37BBF3] hover:underline cursor-pointer'>
          {title}
        </p>
      </a>
    </div>
  )
}
