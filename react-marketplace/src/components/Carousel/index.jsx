import { useEffect, useRef, useState } from 'react'
import { getDefaultAppConfig, isBrowserExtension, uuidv4 } from '@firebase/util'
import { motion } from 'framer-motion'
import productsMock from '../../productsMock'
import CarouselCard from '../CarouselCard'

export default function Carousel() {
  const carousel = useRef()
  const [width, setWidth] = useState(``)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [width])
  return (
    <section
      ref={carousel}
      whiletap={{ cursor: 'grabbing' }}
      id="carousel-section"
      className="border-solid w-full max-w-[90%] min-h-[10vh] overflow-hidden mx-auto bg-slate-200 shadow	 "
    >
      {/* <img src="" alt="left-arrow" /> */}
      <motion.div
        drag="x"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        dragConstraints={{ right: 0, left: -width }}
        id="carousel-itself"
        className="cursor-grab shadow-lg border border-gray-100 flex items-center mx-auto h-[380px] px-4"
      >
        {productsMock.map((product) => (
          <CarouselCard product={product} />
        ))}
      </motion.div>
      {/* <img src="" alt="right-arrow" /> */}
    </section>
  )
}
