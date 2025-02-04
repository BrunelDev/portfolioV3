import Link from 'next/link'

type AchievementsProps = {
    title: string
    source: string
    description: string
    link: string
}

export function Achievements({title, source, description, link}: AchievementsProps) {
  return (
    <Link href={link} className='group w-full'>
      <h6 className='text-[#999FA4] font-semibold text-lg group-hover:underline'>
        <span className='text-white'>{title}</span>
        <span className='font-semibold text-lg'>-{source}</span>
      </h6>
      <p className='text-[#999FA4] text-base text-justify'>
        {description}
      </p>
      
    </Link>
  )
}
