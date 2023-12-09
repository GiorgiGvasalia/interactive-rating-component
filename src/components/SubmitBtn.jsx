import React from 'react'
import './SubmitBtn.css'

const SubmitBtn = ({ onSubmitClick }) => {

   const handleSubmitClick = () => {
      onSubmitClick()
   }

  return (
    <div>
        <button   onClick={handleSubmitClick}>SUBMIT</button>
    </div>
  )
}

export default SubmitBtn