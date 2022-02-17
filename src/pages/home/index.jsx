import React, {useEffect,useState} from 'react'
import PokemonCard from '../../components/pokemon'

function Home() {
    const [pokemons, setPokemons] = useState([])
    const [pokeFilt, setpokeFilt] = useState([])
    const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [next, setnext] = useState('')
    const [prev, setPrev] = useState('')
  
    useEffect(() => {
  
      const getData= async()=>{
        let res =   await  fetch(url);
        let data= await res.json();
          setnext(data.next)
          setPrev(data.previous !== null ? data.previous : "")
          data.results.forEach(async v => {
            let results = await fetch(v.url);
              let json= await results.json();    
                let pokemon = {
                  id: json.id,
                  name: json.name,
                  avatar: json.sprites.front_default,
                  types:[json.types]
                }
                setPokemons((pokemons) => [...pokemons, pokemon].sort((a, b) => a.id > b.id ? 1 : -1))
                setpokeFilt((pokeFilt) => [...pokeFilt, pokemon].sort((a, b) => a.id > b.id ? 1 : -1))
               
              })
            }
         getData()

         return()=>{
        seturl()
         }
  
  
    }, [url])
  
    function handleChange(e){
          let arr= pokemons.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()));
          setpokeFilt(arr)
    }
  
    return (
      <>
  
        <nav className="navbar navbar-expand-lg  bg-danger justify-content-between">
          <h2 className='text-warning font-weight-bold'>Pokedex</h2>
            
          <form className="form-inline">
      <input className="form-control " type="search" placeholder="Search" onChange={handleChange} />
    </form>
        </nav>
        <div className="d-flex justify-content-center">
        { prev !==""? <button type="button" className="btn btn-primary m-2" onClick={()=>{ 
          setPokemons([])
          setpokeFilt([])
          seturl(prev)}}>prev</button>:""}
        <button  type="button" className="btn btn-primary m-2" onClick={()=>{ 
          setPokemons([])
          setpokeFilt([])
          seturl(next)}}>next</button>

        </div>
      
        <div className='d-flex flex-wrap justify-content-center  '>
     
        {
          pokemons.length === 0 ? <h2>Cargando</h2> :
  
           pokeFilt.map((v,i)=>  <PokemonCard key={i} pokes={v}></PokemonCard>)
         
  
        }
       
  </div>
  
      </>
  
    );
  }

export default Home