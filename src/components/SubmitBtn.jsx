import React from 'react'
import './SubmitBtn.css'

const SubmitBtn = ({ onSubmitClick }) => {

   const handleSubmitClick = () => {
      onSubmitClick()
      console.log("submit")
   }

  return (
    <div>
        <button   onClick={handleSubmitClick}>SUBMIT</button>
    </div>
  )
}

export default SubmitBtn