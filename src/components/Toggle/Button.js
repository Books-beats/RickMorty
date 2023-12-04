import React from 'react'

const Button = ({name, index, items, x, setPage}) => {
  return (
    <>
    <style jsx>
        {`
          .form-check-input:checked + label{
            background-color: #FFBF00;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
    </style>
    <div className="form-check">
    <input 
    onClick={() =>{
      setPage(1);
      x(items);
    }}
    className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
    <label className="btn btn-outline-warning" for={`${name}-${index}`}>
    {items}
    </label>
    </div>
    </>
  )
}

export default Button
