import Link from 'next/link';

type News = {
  title: string;
  url: string;
  date: string;
  snippet: string;
};

type Props = {
  patch: News;
};

const NewsCard: React.FC<Props> = ({ patch }) => {
  const { title, url, date, snippet } = patch;

  return (
    <Link 
      className='flex flex-col justify-between gap-2 h-[340px] w-[230px] duration-300 hover:opacity-70
      border-2 bg-dark-400 border-purple-300 rounded-lg'
      href={url} 
      target='_blank'
    >
      <div className='flex justify-center bg-purple-300  rounded-t-md h-16'>
        <h2 className='flex items-center text-center font-bold uppercase '>{title}</h2>
      </div>
      <p className='mx-1 text-[14px]'>{snippet}</p>
      <span className='text-end text-[12px] text-dark-200 mx-1'>{date}</span>
    </Link>
  );
};

export default NewsCard;
