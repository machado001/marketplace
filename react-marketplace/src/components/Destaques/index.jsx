import React, {  useEffect } from 'react';

const Carousel = () =>{
  return(
    <>
    <div className='container'>
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="" />
      </div>
      <div className="carousel">
        <div className="item">
          <div className="image">
            <img src="" alt="shoe"/>
          </div>
          <div className="info">
            <span className="name">Shoe 1</span>
            <span className="oldPrice">U$ 299.00</span>
            <span className="actualPrice"> U$ 199.90</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Carousel;