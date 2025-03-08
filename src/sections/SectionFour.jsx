import React from 'react'
import TestimonialSlider from '../components/TestimonialSlider'
import MovingIcons from '../components/MovingIcons'

const SectionFour = () => {
  return (
      <div className='bg-slate-100 flex flex-col w-full'>
          <TestimonialSlider />
          <div className=' px-20 md:px-36'><MovingIcons/></div>
    </div>
  )
}

export default SectionFour