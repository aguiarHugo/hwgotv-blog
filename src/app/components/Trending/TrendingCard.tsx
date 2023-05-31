import Link from 'next/link'
import React from 'react'

type TrendingCardProps = {
  className?: string
}

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto w-full h-96 relative mt-7 block hover:opacity-60`}
      href="/"
    >
      <div className='z-0 relative w-full h-full bg-dark-100'>
        image
      </div>
      <div className='absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual' />
      <div className='absolute z-2 bottom-0 left-0 p-3'>
        <h4 className='inline-block px-5 py-1 font-semibold bg-purple-300'>
          category
        </h4>
        <div className='mt-2'>
          post title
        </div>
      </div>
    </Link>
  )
}

export default TrendingCard