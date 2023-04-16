import React from 'react'
import { Link } from 'react-router-dom'



export  function Home(props) {
  return (
    <div>
      <div>
        <div>
        <h1><Link to="/login">Login</Link></h1>
        <br />
        <h1><Link to="/registro">Registro</Link></h1>
        </div>
      </div>
      <h2>{props.name?`Bienvenido - ${props.name}`:'Inicie sesión'}</h2>
    </div>
  
  )
}
