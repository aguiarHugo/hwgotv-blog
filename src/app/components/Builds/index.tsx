import React from 'react'

type Props = {}

const Builds = (props: Props) => {
  return (
    <section>
      <div className='flex items-center gap-3 mt-8'>
        <h4 className='bg-builds-100 py-2 px-4 w-32 text-center font-bold'>
          Builds
        </h4>
      </div>
       {/* GRID */}
       <div className='sm:grid sm:h-[200px] grid-cols-2 grid-rows-3 gap-8 my-3'>
        {/* LARGE CARD */}
        <div className='flex col-span-2 row-span-3 border border-builds-100'>
          <h2 className='flex items-center text-4xl justify-center mx-auto'>Em Breve!</h2>
        </div>
        {/* SMALL CARD */}
        {/* <Card 
          className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3 border border-white' 
          imageHeight='h-48' 
          isSmallCard 
        />
         <Card
          className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3 border border-white' 
          imageHeight='h-48' 
          isSmallCard 
        />
         <Card 
          className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3 border border-white' 
          imageHeight='h-48' 
          isSmallCard 
        /> */}
      </div>
    </section>
  )
}

export default Builds