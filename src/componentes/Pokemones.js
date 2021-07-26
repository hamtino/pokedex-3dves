import React from 'react';
import PokemonesGaleria from "./PokemonesGaleria";

class Pokemones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <PokemonesGaleria /> );
    }
}
 
export default Pokemones;