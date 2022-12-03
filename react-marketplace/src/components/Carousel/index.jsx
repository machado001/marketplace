
import { useEffect,useRef, useState } from 'react';
import { getDefaultAppConfig, isBrowserExtension, uuidv4 } from '@firebase/util'
import {motion} from 'framer-motion'
import productsMock from '../../productsMock';
import { v4 } from 'uuid'




export default function Carousel() {

    const carousel = useRef();
    const [width,setWidth] = useState(``)

    useEffect(()=> {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[width])
    return (
        
        <section ref={carousel} whiletap={{cursor:"grabbing"}} id="carousel-section" className="border-solid w-full max-w-2xl min-h-[10vh] overflow-hidden mx-auto bg-slate-200 shadow	 " >
            Clique e arraste
            {/* <img src="" alt="left-arrow" /> */}
<motion.div drag="x" initial={{x:300}} animate={{x:0}} transition={{duration:1}} dragConstraints={{right:0,left:-width}} id="carousel-itself" className='cursor-grab flex mx-auto'>
{productsMock.map((product)=> (
                <motion.div key={v4()} className='item-div min-w-[200px] min-h-[100px] max-w-[100px] max-h-[300px] m-1 rounded shadow-lg border-solid border-black bg-zinc-50'  >
                 <img src={product.productSrc} drag="x"  alt="Highlight-Items" className='rounded w-[80%] h-[40%] pointer-events-none mx-auto shadow-sm my-3 '/>
                 <ul className='space-y-4 ml-5 mt-8'>
                     <li ><span className='italic bg-slate-300 p-2 rounded'>{product.productName}</span></li>
                     <li ><span className='text-lime-500 bg-slate-300 p-2 rounded'>{product.productPrice}</span></li>
                     <li ><a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=dKD4o-jrvTE' className='rounded bg-blue-200 p-2 font-medium bg-slate-300 	
'>More Details...</a></li>
                 </ul>
                </motion.div>
            ))}
</motion.div>   
            {/* <img src="" alt="right-arrow" /> */}
       </section>
    )
}