import React from 'react'
import './RatingApp.css'
import Icon from './Icon'
import Header from './Header'
import RateBtns from './RateBtns'
import SubmitBtn from './SubmitBtn'

const RatingApp = () => {
  return (
    <div className='rating-app'>
        <Icon />
        <Header />
        <RateBtns />
        <SubmitBtn />
    </div>
  )
}

export default RatingApp