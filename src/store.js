import { createStore } from 'redux';

const initialState = {
 colores: [{}]
}

const reducerEntrenador = (state = initialState, action) => {
 console.log(action);
 if (action.type === 'SET_COLORES') {
  return {
   ...state,
   colores:action.colores
  }
 }
 if (action.type === 'AGREGAR_SUPLENTE') {
  return {
   ...state,
   suplentes: state.suplentes.concat(action.jugador),
   jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
  }
 }
 if (action.type === 'QUITAR_TITULAR') {
  return {
   ...state,
   titulares: state.titulares.filter(titular => titular.id !== action.titular.id),
   jugadores: state.jugadores.concat(action.titular)
  }
 }
 if (action.type === 'QUITAR_SUPLENTE') {
  return {
   ...state,
   suplentes: state.suplentes.filter(suplente => suplente.id !== action.suplente.id),
   jugadores: state.jugadores.concat(action.suplente)
  }
 }

 return state

}

export default createStore(reducerEntrenador)