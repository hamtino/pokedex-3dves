import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { cargarDetalles } from "../redux/tareas";

class Tarjeta extends React.Component {
  render() {
    const { name, url } = this.props.pokemon;
    const id = url.split("/")[6];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return (
      <Grid item xs={3}>
        <Card>
          <CardActionArea onClick={event => { this.props.añadirDetalle(this.props.pokemon)}}>
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              <CardMedia
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "150px",
                  maxHeight: "150px",
                }}
                height="150"
                component="img"
                image={imgUrl}
                title="Contemplative Reptile"
              />
            </div>
            <CardContent>
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              <Typography gutterBottom variant="h6" component="h6">
                {name}
              </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

//gurdamos los poquemones que estan en la store
const mapStateToProps = (state) => {
  return {
    pokemones: state.detalles,
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
export default connect(mapStateToProps, mapDispatchToProps)(Tarjeta);