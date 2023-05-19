import builds from '../assets/builds/necrobuild.png';
import patchnotes from '../assets/patchnotes/patchnotes.png';
import news from '../assets/news/news1.jpg';
import { StaticImageData } from 'next/image';


type HomeCardItem = {
  title: string;
  text: string;
  image: StaticImageData;
  bgColor: string;
  borderColor: string;
  tag: string;
};

export const homeCardContent: HomeCardItem[] = [
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    tag: 'News',
    image: news,
    bgColor: '#9146FF',
    borderColor: '#9146FF',
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    tag: 'Builds',
    image: builds,
    bgColor: '#ad4b48',
    borderColor: '#ad4b48',
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    tag: 'Patch Notes',
    image: patchnotes,
    bgColor: '#2C7A7B',
    borderColor: '#2C7A7B',
  },
];
