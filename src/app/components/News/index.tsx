import NewsCard from "./NewsCard";
import { newsContent } from "./newsContent";

type Props = {};

const News: React.FC<Props> = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-3 mt-8 mb-4">
          <h4 className="bg-purple-300 py-2 px-4 w-32 text-center font-bold">
           News
          </h4>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-around md:justify-between gap-2 sm:gap-8">
          {newsContent.map((patch, index) => (
            <NewsCard key={index} patch={patch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
