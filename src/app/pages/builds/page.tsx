import React from 'react'
import Builds from '../../components/Builds'

type Props = {}

const BuildsPage = (props: Props) => {
  return (
    <section className="mt-16 pt-12 md:mt-24">
      <div className='flex flex-col gap-1 w-[90%] mx-auto'>
        <h1 className='text-4xl text-center sm:text-5xl'>As melhores builds</h1>
        <p className='text-center'>Árvore de habilidades, equipamentos e mais!</p>
       <Builds />
      </div>
    </section>
  )
}

export default BuildsPage