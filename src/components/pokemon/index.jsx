import React, {useState} from 'react'
import './index.css'
import { Link } from 'react-router-dom'


function PokemonCard({ pokes }) {


    return ( 
      
        <div  className='card m-3 card-poke'>
 <Link to={`/details/${pokes.id}`} state={pokes}>
    <img  className="card-img-top img" src={pokes.avatar} alt="" />

    </Link>
    <div className="card-body btn-primary rounded">
   
    <h5 className="card-text font-weight-bold ">{pokes.name}</h5>
     
        {pokes.types[0].map((t,i)=>{ return <p key={i} className='card-text'>{t.type.name}</p>})}
        <span className='card-text text-warning'>{pokes.id}</span>
       
  </div>
 

        </div>
         
    )
}

export default PokemonCard