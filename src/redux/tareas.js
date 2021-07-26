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
console.log('data: ', data);
        const datos = 
          {
            hp: data.base_experience,
            id: data.id,
            nombre: data.name,
            imagen: data.sprites.other["official-artwork"].front_default,
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
  