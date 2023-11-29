import React from 'react'

const Eliminar = (deleteIngredient, ingrediente) => {
  return (
    <button
    onClick={() => {
      deleteIngredient(ingrediente.id);
    }}
  >
    Eliminar
  </button>
  )
}

export default Eliminar