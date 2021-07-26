export const iniciarPokemon = (dispatch) => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "INICIAR_POKEMONES",
          data: data,
        });
      })
      .catch((err) => console.log(err));
  };
    
  export const cargarDetalles = (dispatch, data) => {
    return fetch(data.url)
      .then((resp) => resp.json())
      .then((data) => {
        const datos = 
          {
            nombre: data.name,
            imagen: data.sprites.other.dream_world.front_default,
            peso: data.weight,
            altura: data.height,
            habilidades: data.abilities,
            experiencia: data.stats
          }
        ;
        dispatch({
          type: "POKEMON_DETALLES",
          data: datos,
        });
      })
      .catch((err) => console.log(err));
  };
  