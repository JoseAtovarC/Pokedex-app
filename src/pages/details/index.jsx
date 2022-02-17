import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom';
import Nav from '../../components/nav';
import { useState } from 'react';

function Details() {
  const poke = useLocation().state;
  const [img, setImg] = useState(poke.avatar)
  const getPokeInfo= async()=>{
  
        let res= await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}`)
        let data=await res.json()
        setImg(data.sprites.front_shiny)
       

  }

  return (
    <>
   <Nav></Nav>
    <div className='d-flex justify-content-center p-5 m-5' onClick={()=> getPokeInfo()} >

      <Link to="info" state={poke}>
    <div className="card rounded bg-primary " style={{ boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)"}} >
  <img className="card-img" style={{width: "20rem"}} src={img} alt=""/>
  <div className="card-img-overlay">
  </div>
</div>
</Link>

</div>
<Outlet></Outlet>
</>
  )
}

export default Details