import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className='h-16 bg-dark-400 w-full fixed bottom-0 right-0 left-0'>
      <div className='flex items-center justify-between h-full w-[90%] mx-auto'>
        <div className='font-bold'>
          <span className='text-purple-300'>©</span>HwgoTv
        </div>
        <div className='font-bold'>2023</div>
      </div>
    </section>
  )
}

export default Footer