import { useEffect, useRef, useState } from 'react'
import { getDefaultAppConfig, isBrowserExtension, uuidv4 } from '@firebase/util'
import { motion } from 'framer-motion'
import productsMock from '../../productsMock'
import { v4 } from 'uuid'
import { CaretRight } from 'phosphor-react'

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
          <motion.div
            key={v4()}
            className="item-div border min-w-[200px] h-[350px] m-1 rounded shadow-lg border-solid border-gray-300 bg-zinc-50"
          >
            <img
              src={product.productSrc}
              drag="x"
              alt="Highlight-Items"
              className="rounded w-[80%] h-[50%] pointer-events-none mx-auto shadow-sm my-3 "
            />
            <ul className="space-y-4 ml-5">
              <li className="h-8 w-36 truncate">
                <span
                  title={product.productName}
                  className=" rounded cursor-default w-full"
                >
                  {product.productName}
                </span>
              </li>
              <li>
                <span className="text-lime-700 font-bold rounded cursor-default">
                  R${product.productPrice}
                </span>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=dKD4o-jrvTE"
                  className="rounded bg-indigo-200 p-2 font-medium flex items-center justify-between w-28"
                >
                  Detalhes <CaretRight />
                </a>
              </li>
            </ul>
          </motion.div>
        ))}
      </motion.div>
      {/* <img src="" alt="right-arrow" /> */}
    </section>
  )
}
