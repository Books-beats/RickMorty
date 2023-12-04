import React from 'react'
import Button from './Button'

const Species = ({setPage, setSpecies}) => {
    let species= ["Human", "Alien", "Humanoid", "PoopyButthole", "Mythological", "Unknown", "Animal", "Disease", 
     "Robot", "Cronenberg", "Planet"]
  return (
   
    
    
  <div className="accordion-item border border-dark rounded-top">
    <h2 className="accordion-header bg-warning" id="flush-headingOne">
      <button className="accordion-button collapsed bg-warning text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Species
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
      {species.map((items, index) =>
        <Button 
        x= {setSpecies}
        setPage= {setPage}
        key={index} 
        name="species" 
        index={index} 
        items={items}/>
        )}
      </div>
    </div>
  </div>
 
  )
}

export default Species
