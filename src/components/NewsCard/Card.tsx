import Image, { StaticImageData } from 'next/image';

type Props = {
  news: {
    title: string;
    text: string;
    image: StaticImageData;
  };
};

const Card = ({ news }: Props) => {
    const { title, text, image } = news

    return (
          <div className='w-[300px] h-[400px] border border-solid border-purple-200 rounded-xl'>
            <div className='absolute bg-purple-200 rounded-md px-1 m-2'>
              <p>News</p>
            </div>
            <div className='p-1'>
              <Image className='rounded-xl h-[200px]' src={image} alt={title} />
            </div>
            <div className='mx-2'>
              <h2 className='text-center font-bold uppercase'>{title}</h2>
              <p className='text-dark-100'>{text}</p>
            </div>
          </div>
      );
    };

export default Card