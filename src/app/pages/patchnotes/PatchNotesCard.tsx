import Link from 'next/link';
import Image  from 'next/image';

import news1 from '/public/news1.jpg'

type PatchNote = {
  title: string;
  url: string;
  date: string;
  snippet: string;
};

type Props = {
  patch: PatchNote;
};

const PatchNotesCard: React.FC<Props> = ({ patch }) => {
  const { title, url, date, snippet } = patch;

  return (
    <Link 
      className='flex flex-col justify-between gap-2 h-[360px] w-[230px] duration-300 hover:opacity-70
      border-2 border-patchnotes-100 rounded-lg relative'
      href={url} 
      target='_blank'
    >
      <Image
        className='absolute z-[-10] top-16 h-[290px] opacity-50 rounded-md'
        src={news1}
        alt={title}
      />
      <div className='flex justify-center bg-patchnotes-100  rounded-t-md h-16'>
        <h2 className='flex items-center text-center font-bold uppercase '>{title}</h2>
      </div>      <p className='mx-1'>{snippet}</p>
      <span className='text-end text-[14px] text-dark-200 mx-1'>{date}</span>
    </Link>
  );
};

export default PatchNotesCard;
