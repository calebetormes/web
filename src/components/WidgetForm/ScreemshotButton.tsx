import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../loading";

interface ScreenshotButtonProps {
  screenshot: string
  onScreenshotTook: (screeshot: string)=> void;
}

export function ScreenshotButton({ 
  screenshot, 
  onScreenshotTook 
}: ScreenshotButtonProps)  {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
  
  async function handTakeScreenshot ()  {
    
    setIsTakingScreenshot(true);
    
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }


  if (screenshot) {
    return  (
      <button
        type=""
        className="p-1 w-18 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors "
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'rigth bottom',
          backgroundSize: 180,
        }}
      >
      <Trash weight="fill"/>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="
        p-2 
        bg-zinc-800 
        rounded-md 
        border-transparent 
        hover:bg-zinc-400 
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-zinc-900
        focus:ring-brand-500
        transition-colors "
      onClick={handTakeScreenshot}
    >
    { isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6 text-zinc-100"/>}
    
    </button>
  )
}




