import React from 'react'
import {  useLocation } from 'react-router-dom'

function Info() {
    const poke = useLocation().state;
  return (
      
       
       <div className='d-flex justify-content-center '>
            <div>
       <h2>{poke.name}</h2>
       {poke.types[0].map((t,i)=>{ return <p className='text-danger font-weight-bold' key={i} >{t.type.name}</p>})}
       </div>
       </div>
    
  )
}

export default Info