import TrendingCard from "./TrendingCard"

type Props = {}

const Trending = (props: Props) => {
  return (
    <section>
      <div className='bg-purple-300 py-2 px-4 mt-6 w-32 text-center font-bold'>
        Trending
      </div>
      <div>
        <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[500px] my-3">
          <TrendingCard className="col-span-2 row-span-2 bg-purple-300" />
          <TrendingCard className="col-span-2 row-span-1 min-w-[245px]" />
          <TrendingCard className="col-span-1 row-span-1 min-w-[120px]" />
          <TrendingCard className="col-span-1 row-span-1 min-w-[120px]" />
        </div>
      </div>
    </section>
  )
}

export default Trending