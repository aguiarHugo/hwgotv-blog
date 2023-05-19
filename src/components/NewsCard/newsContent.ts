import news1 from '../../assets/news/news1.jpg';
import { StaticImageData } from 'next/image';


type NewsItem = {
  title: string;
  text: string;
  image: StaticImageData;
};

export const newsContent: NewsItem[] = [
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: news1,
   
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: news1,
   
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: news1,
    
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: news1,
   
  },
];
