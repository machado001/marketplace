
import { useEffect,useRef, useState } from 'react';
import { getDefaultAppConfig, isBrowserExtension, uuidv4 } from '@firebase/util'
import {motion} from 'framer-motion'
import imagesPool from '../../imagesPool';
import { v4 } from 'uuid'




export default function Carousel() {

    const carousel = useRef();
    const [width,setWidth] = useState(``)

    useEffect(()=> {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[width])
    return (
        
        <section ref={carousel} whiletap={{cursor:"grabbing"}} id="carousel-section" className="border-solid w-full max-w-4xl min-h-[20vh] overflow-hidden mx-auto border-2 " >
            Clique e arraste
            {/* <img src="" alt="left-arrow" /> */}
<motion.div drag="x" initial={{x:300}} animate={{x:0}} transition={{duration:1}} dragConstraints={{right:0,left:-width}} id="carousel-itself" className='cursor-grab flex mx-auto w-100 '>
{imagesPool.map((imgSrc)=> (
                <motion.div key={v4()} className='item-div min-w-[200px] min-h-[200px] '  >
                 <img src={imgSrc.src} drag="x"  alt="Make sure to include a alt tag, because react might throw an error at build" className='rounded-2xl w-48 h-full pointer-events-none	 '/>
                </motion.div>
            ))}
</motion.div>   
            {/* <img src="" alt="right-arrow" /> */}
       </section>
    )
}