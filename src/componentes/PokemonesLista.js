import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { cargarDetalles } from "../redux/tareas";

class PokemonesLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <List>
        {this.props.pokemones.map((pokemon, index) => (
          <div onClick={event => { this.props.añadirDetalle(pokemon)}}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(index + 1)}.png`} />
              </ListItemAvatar>
              <ListItemText
                primary={pokemon.name}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
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
        añadirDetalle: (data) => {
console.log('data: ', data);
          cargarDetalles(dispatch, data);
        },
      };
};

//conectamos la store al componente
export default connect(mapStateToProps, mapDispatchToProps)(PokemonesLista);
