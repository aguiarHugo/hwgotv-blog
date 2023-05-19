import Card from "./Card"
import { newsContent } from "./newsContent";

type Props = {}

const NewsCard = (props: Props) => {
  return (
    <main className="flex justify-center mt-8">
      <div className='flex flex-wrap justify-center items-center gap-2'>
        {newsContent.map((news) => (
          <Card key={news.title} news={news} />
        ))}
      </div>
    </main>
  );
};

export default NewsCard