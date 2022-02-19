import React,{useState} from 'react'
import Nav from '../../components/nav'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();
    const [res, setres] = useState("")
    const location= useLocation();
      const poke = new URLSearchParams(useLocation().search);
      const name = poke.get("name")
      console.log(name)
  return (
    <>
    <Nav></Nav>
    <form className='m-5 p-5' onSubmit={(e)=>{



        e.preventDefault()
        fetch('https://formsubmit.co/ajax/jose.tovarcabrera@gmail.com',{
          method: "POST",
          body: new FormData(e.target)})
          .then(res=> res.json())
          .then(data=>{
              setres("Gracias Por Registarte")
              setTimeout(()=>{
                navigate('/') 
              },2000)
            
            })
        

      }}>

          <h2 className='text-center mb-4 text-primary p-4'>Registrate Para mas Informacion Sobre Pokemons</h2>
    <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Nombre</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name='nombre' id="inputPassword3" placeholder="Nombre"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" name='email' id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  
  <div className="form-group row">

    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" required/>
        <label className="form-check-label" for="gridCheck1">
        Estoy de acuerdo con los términos y condiciones
        </label>
      </div>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Enviar</button>
    </div>
  </div>

  <h3>{res}</h3>
</form>
    </>
  )
}

export default Contact