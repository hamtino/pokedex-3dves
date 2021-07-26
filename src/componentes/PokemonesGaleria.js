import React from "react";
import { connect } from "react-redux";
import { iniciarPokemon } from "../redux/tareas";
import Tarjeta from "./TarjetaPokemon";
import Grid from "@material-ui/core/Grid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class PokemonesGaleria extends React.Component {
  componentDidMount() {
    this.props.pokemonesLista();
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={3}>
            {this.props.pokemones.map((pokemon, index) => (
              <Tarjeta pokemon={pokemon} key={index} />
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
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