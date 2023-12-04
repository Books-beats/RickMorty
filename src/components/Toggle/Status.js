import React from 'react'
import Button from './Button'

const Status = ({setStatus, setPage}) => {
    let status= ["Alive", "Dead", "Unknown"];
  return (
    
  <div className="accordion-item border border-dark rounded-top">
    <h2 className="accordion-header bg-warning" id="flush-headingThree">
      <button className="accordion-button bg-warning text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Status
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
      {status.map((items, index) =>
        <Button
         x= {setStatus}
         setPage= {setPage} 
         key={index}
         name="status" 
         index={index} 
         items={items}/>
        )}
        </div>
    </div>
  </div>
 
  )
}

export default Status
