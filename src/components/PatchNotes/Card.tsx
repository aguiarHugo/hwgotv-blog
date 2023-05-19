import Image, { StaticImageData } from 'next/image';

type Props = {
  patchNotes: {
    title: string;
    text: string;
    image: StaticImageData;
  };
};

const Card = ({ patchNotes }: Props) => {
    const { title, text, image } = patchNotes

    return (
          <div className='w-[300px] h-[400px] border border-solid border-green-100 rounded-xl mb-4'>
            <div className='absolute bg-green-100 rounded-md px-1 m-2'>
              <p>Patch Notes</p>
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