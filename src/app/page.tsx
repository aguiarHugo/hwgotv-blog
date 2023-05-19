import HomeCard from "./HomeCard"
import { homeCardContent } from "./homeCardContent"

export default function Home() {
  return (
    <main className="mt-16 pt-12 md:mt-24">
      <div className='flex flex-col mx-auto gap-1'>
        <h1 className='text-4xl text-center sm:text-5xl'>Tudo sobre Diablo IV</h1>
        <p className='text-center'>Confira noticiais, builds, patch notes e muito mais!</p>
      </div>
      <div className="flex flex-wrap justify-center mt-12 gap-4 md:gap-8">
        <HomeCard homeCardContent={homeCardContent} />
      </div>
    </main>
  )
}
