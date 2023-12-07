import React from 'react'
import RateBtn from './RateBtn'
import './RateBtns.css'

const RateBtns = () => {
  return (
    <div className='rating-btns-container'>
        <RateBtn value={1}/>
        <RateBtn value={2}/>
        <RateBtn value={3}/>
        <RateBtn value={4}/>
        <RateBtn value={5}/>
    </div>
  )
}

export default RateBtns