import { BACKGROUND_COLOURS } from "./Constants";

export  const scrollToTopOfPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

export const randomColour = ()=>{

  return BACKGROUND_COLOURS[Math.floor(Math.random() * (BACKGROUND_COLOURS.length-1))]
}

