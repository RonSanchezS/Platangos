import React from 'react'

const Guardar = () => {
    const guardarProgreso = () => {
        console.log('Guardando progreso')
    }
    
  return (
    <button onClick={()=>{
        guardarProgreso()
    }}>
        Guardar
    </button>
  )
}

export default Guardar