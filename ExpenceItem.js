import React from 'react'
import './ExpenceItem.css'

export default function ExpenceItem( LocationOfExpenditure) {
  
  return (

      <div className="expense-item ">
      <div>{ LocationOfExpenditure.expenceDate}</div>
      
     
      
      <div className='expense-item__description'>
        <h2>{ LocationOfExpenditure.expenceDetail}</h2>
       
      <div className='expense-item__price'>{ LocationOfExpenditure.expencePrice}</div>
      </div>

    </div>
   
  )
}
