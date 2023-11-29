import React from 'react'

const Recetario = (recetas) => {
  return (
    <>  
    <div>Recetario, aqui iran todas las recetas que vayas desbloqueando.</div>
    {recetas && recetas.map((receta) => {
        return (
            <div key={receta.id}>
            <h3>{receta.name}</h3>
            <p>{receta.description}</p>
            <p>{receta.ingredients}</p>
            <p>{receta.steps}</p>
            </div>
        )
    })}
    </>
  )
}

export default Recetario