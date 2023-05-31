import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string
  imageHeight: string
  isSmallCard?: boolean
  isLongForm?: boolean
}

const Card = ({ 
  className, 
  imageHeight, 
  isSmallCard = false, 
  isLongForm = false
}: Props) => {
  return (
    <div className={className}>
      <Link className='basis-full hover:opacity-60' href='/'>
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          image
        </div>
      </Link>
      <div className='basis-full'>
        <Link href='/'>
          <h4 className={`font-bold hover:opacity-60 
          ${isSmallCard ? 'text-base' : 'text-lg'}
          ${isSmallCard ? 'line-clamp-2' : ''}
          `}>
            title
          </h4>
        </Link>

        <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3`}>
          <h5 className='font-semibold text-xs'>author</h5>
          <h6 className='text-xs'>date</h6>
          <p className={`${isLongForm ? 'line-clamp-5' : 'line-clamp-3'}`}>
            snippet
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card