import { useState } from 'react'
import Card from './assets/Components/Card'
import './App.css'
import Enviado from './assets/Components/Enviado'
import './assets/Estilos/Card.css'
function App() {
  const [estudiante, setEstudiante] = useState({
    nombre: '',
    edad: '',
    nacionalidad: ''
  });
  const [show, setShow] = useState(false)
  const [error, setError] = useState (false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(estudiante.nombre.length > 3 && estudiante.edad.includes(' ') && estudiante.nacionalidad.length > 5){

      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }
  console.log(estudiante);
  return (
    
    <div className='App'>
      <h2>Carga de estudiantes</h2>
      {!show &&
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input type="text" value={estudiante.nombre} onChange={(e)=> setEstudiante({...estudiante, nombre: e.target.value.trimStart()})} /> <br></br>
          <label>Edad</label>
          <input type="text" value={estudiante.edad} onChange={(e)=> setEstudiante({...estudiante, edad: e.target.value.trimStart()})} /> <br></br>
          <label>Nacionalidad</label>
          <input type="text" value={estudiante.nacionalidad} onChange={(e)=> setEstudiante({...estudiante, nacionalidad: e.target.value.trimStart()})} /> <br></br>
          <button>Enviar ➡️</button>
        </form>
      }
      { show ?
        <Enviado nombre={estudiante.nombre}  edad={estudiante.edad}  nacionalidad={estudiante.nacionalidad} />
        :
            null
      }
      {error && <h5 style={{color:'red'}}>Por favor, el nombre debe tener más de tres caracteres, la edad debe tener espacios y la nacionalidad, más de 5. Intenta de nuevo‼️‼️</h5>}
  
    </div>
    
  )
}

export default App
