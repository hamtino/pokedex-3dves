import React from "react";
import { connect } from "react-redux";
import { iniciarPokemon } from "../redux/tareas";
import Tarjeta from "./TarjetaPokemon";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

class PokemonesGaleria extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
}
  componentDidMount() {
    this.props.pokemonesLista();
  }
  render() {
    return (
      
        <div ref={this.myRef}>
          <Grid container spacing={3}>
            {this.props.pokemones.map((pokemon, index) => (
              <Tarjeta pokemon={pokemon} key={index} />
            ))}
          </Grid>
        </div>
  
    );
  }
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop) 
}

//gurdamos los poquemones que estan en la store
const mapStateToProps = (state) => {
  return {
    pokemones: state.pokemones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pokemonesLista: () => {
      iniciarPokemon(dispatch);
    },
  };
};

//conectamos la store al componente
export default connect(mapStateToProps, mapDispatchToProps)(PokemonesGaleria);