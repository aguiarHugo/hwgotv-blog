import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type HomeCardItem = {
  title: string;
  text: string;
  image: StaticImageData;
  bgColor: string;
  borderColor: string;
  tag: string;
};

type Props = {
  homeCardContent: HomeCardItem[];
};

const HomeCard = ({ homeCardContent }: Props) => {
  return (
    <>
      {homeCardContent.map((card) => (
        <Link
          href='/'
          key={card.title}
          className='transition duration-300 transform hover:scale-105 hover:shadow-lg'
        >
        <div className="w-[300px] h-[430px] border border-solid border-dark-200 rounded-xl" key={card.title}>
          <div className='absolute bg-black rounded-md px-1 m-2'>
            <p>{card.tag}</p>
          </div>
          <div className='p-1'>
            <Image className='rounded-xl h-[200px]' src={card.image} alt={card.title} />
          </div>
          <div className='mx-2'>
            <h2 className='text-center font-bold uppercase'>{card.title}</h2>
            <p className='text-dark-100 leading-relaxed mt-4'>{card.text}</p>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};

export default HomeCard;
