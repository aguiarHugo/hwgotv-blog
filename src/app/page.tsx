import News from "./components/News";


export default async function Home() {
  return (
    <main className="my-16 pt-12 md:mt-24">
      <div className='flex flex-col gap-1 w-[90%] mx-auto'>
        <h1 className='text-4xl text-center sm:text-5xl'>Tudo sobre Diablo IV</h1>
        <p className='text-center'>Confira noticiais, builds, patch notes e muito mais!</p>
      </div>
      <News />
    </main>
  )
}
