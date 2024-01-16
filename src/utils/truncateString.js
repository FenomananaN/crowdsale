import { useEffect, useRef, useState } from "react";

export function useTruncateString(str, maxLength) {

   
    const [text,setText] = useState(str)

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth)
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, [])

      useEffect(()=>{
        if (windowSize >= 500) {
            setText(str)
            }
          else {truncate(windowSize)}
      },[windowSize])


    const truncate = (width) =>{
        const maxLength = (39 * width)/560
        const halfLength = Math.floor((maxLength - 3) / 2);
        const firstHalf = str.slice(0, halfLength)
        const secondHalf = str.slice(-halfLength)

        setText(`${firstHalf}...${secondHalf}`)

    }

    //return 
    return text
}
