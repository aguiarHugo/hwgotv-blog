import NewsCard from "@/components/NewsCard";

export default function News() {
  return (
    <main className="mt-16 pt-12 md:mt-24">
      <div className='flex flex-col mx-auto gap-1'>
        <h1 className='text-4xl text-center sm:text-5xl'>Últimas noticias</h1>
      </div>
      <NewsCard />
    </main>
  )
}