import Link from 'next/link';

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
      className='flex flex-col justify-between gap-4 h-[360px] w-[230px] duration-300 hover:opacity-70
      border-2 bg-dark-400 border-patchnotes-100 rounded-lg'
      href={url} 
      target='_blank'
    >
      <h2 className='bg-patchnotes-100 text-center font-bold uppercase rounded-t-md py-2 items-center'>{title}</h2>
      <p className='mx-1'>{snippet}</p>
      <span className='text-end text-[14px] text-dark-200 mx-1'>{date}</span>
    </Link>
  );
};

export default PatchNotesCard;
