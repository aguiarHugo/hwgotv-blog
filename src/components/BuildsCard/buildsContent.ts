import necrobuild from '../../assets/builds/necrobuild.png';
import { StaticImageData } from 'next/image';


type BuildItem = {
  title: string;
  text: string;
  image: StaticImageData;
};

export const buildsContent: BuildItem[] = [
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: necrobuild,
   
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: necrobuild,
   
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: necrobuild,
    
  },
  {
    title: "O Inferno está de portas abertas",
    text: `A história de Diablo IV se passa 50 anos depois dos acontecimentos de Diablo III,
      introduzindo uma nova parte do Inferno tanto para os veteranos quanto para os novatos aniquilarem`,
    image: necrobuild,
   
  },
];
