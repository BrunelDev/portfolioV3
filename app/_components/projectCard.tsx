import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectProps = {
    image: string;
    title: string;
    description: string;
    link: string;
}
export  function ProjectCard({image, title, description, link}: ProjectProps) {
    return (
      <Link href={link} className='border rounded-[8px] overflow-hidden border-[#2F3335] bg-[#47556900] w-full h-auto sm:h-[405px] flex flex-col gap-2 group transition-all hover:scale-[1.03] duration-200'>
          <div className='w-full overflow-hidden'>
            <Image src={image} alt={title} width={400} height={500} className='group-hover:scale-105 duration-200 w-full h-[150px] sm:h-[200px] object-cover'/>
          </div>
          <div className='flex flex-col px-4 sm:px-6 gap-3 sm:gap-4 pb-4 sm:pb-0'>
              <h1 className='text-xl sm:text-2xl text-white font-bold group-hover:underline'>{title}</h1>
              <p className='text-base sm:text-lg text-[#999FA4]'>{description}</p>
          </div>
      </Link>
    )
}
