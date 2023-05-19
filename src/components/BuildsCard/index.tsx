import Card from "./Card"
import { buildsContent } from "./buildsContent";

type Props = {}

const BuildsCard = (props: Props) => {
  return (
    <main className="flex justify-center mt-8">
      <div className='flex flex-wrap justify-center items-center gap-2'>
        {buildsContent.map((builds) => (
          <Card key={builds.title} builds={builds} />
        ))}
      </div>
    </main>
  );
};

export default BuildsCard