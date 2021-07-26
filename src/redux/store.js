import { createStore } from 'redux'

const estadoInicial = {
    pokemones: [],
    historial: [],
    detalles: {
        nombre: 'seleccione pokemon',
        imagen: 'https://i.pinimg.com/originals/43/e5/87/43e5879e3357ee51e080eda20d99bbde.png'
    }
}
//funcion reductora
const reducerPrincipal = (estado = estadoInicial, accion) => {
    switch (accion.type) { 
        case 'INICIAR_POKEMONES': // guardar poquemons desde la API

            return {
                ...estado,
                pokemones: accion.data.results

            };
        
        case 'POKEMON_DETALLES':
            return {
                ...estado,
                detalles: accion.data
                
            }    

        default: // if non of the cases match
            return estado;
    }
}
//se crea el store
export default createStore(reducerPrincipal)