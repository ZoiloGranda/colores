import { createStore } from 'redux';

const initialState = {
 colores: [{}]
}

const reducerEntrenador = (state = initialState, action) => {
 if (action.type === 'SET_COLORES') {
  return {
   ...state,
   colores:action.colores
  }
 }
 return state
}

export default createStore(reducerEntrenador)