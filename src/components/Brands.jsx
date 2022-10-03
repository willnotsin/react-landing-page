import React from 'react'
//import data
import { overview } from '../data'

const Brands = () => {
  const {brands} = overview
  return (
    <section className='py-9'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-5">
        {/* brands */}
        {brands.map((item, index)=> {
          const {image, delay} = item
          return(
            <div key={index} data-aos="zoom-in-up" data-aos-delay={delay}>
              {/* brand image */}
              <img src={image} alt="" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Brands