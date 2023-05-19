import patchnotes from '../../assets/patchnotes/patchnotes.png';
import { StaticImageData } from 'next/image';


type PatchNotesItem = {
  title: string;
  text: string;
  image: StaticImageData;
};

export const patchNotesContent: PatchNotesItem[] = [
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: patchnotes,
   
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: patchnotes,
   
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: patchnotes,
    
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: patchnotes,
   
  },
];
