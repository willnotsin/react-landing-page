import React from 'react'
//import data 
import {overview} from '../data'

const Overview = () => {
  const {productImg} = overview
  return (
    <section className='lg:min-h-[300px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className="container mx-auto flex justify-end overflow-hidden">
        <img src={productImg} alt="" data-aos='flip-up' data-aos-offset='200' />
      </div>
    </section>
  )
}

export default Overview