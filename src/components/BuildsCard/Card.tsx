import Image, { StaticImageData } from 'next/image';

type Props = {
  builds: {
    title: string;
    text: string;
    image: StaticImageData;
  };
};

const Card = ({ builds }: Props) => {
    const { title, text, image } = builds

    return (
          <div className='w-[300px] h-[400px] border border-solid border-red-100 rounded-xl'>
            <div className='absolute bg-red-100 rounded-md px-1 m-2'>
              <p>Builds</p>
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