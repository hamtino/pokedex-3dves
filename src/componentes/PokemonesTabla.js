import React from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";
import { cargarDetalles } from "../redux/tareas";

class PokemonesTabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <TableContainer component={Paper}>
          <Table className="tabla" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >Pokemon</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Numero</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.pokemones.map((row, index) => (
                <TableRow key={row.name} onClick={event => { this.props.añadirDetalle(row)}}>
                  <TableCell component="th" scope="row">
                  <Avatar alt="Remy Sharp" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(index + 1)}.png`} />
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{index + 1}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
      cargarDetalles(dispatch, data);
    },
  };
};

//conectamos la store al componente
export default connect(mapStateToProps, mapDispatchToProps)(PokemonesTabla);