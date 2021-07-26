import React from "react";
import { connect } from "react-redux";
import { iniciarPokemon } from "../redux/tareas";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

class PokemonesDetalles extends React.Component {
  render() {
    console.log("this.props.detalles.imagen: ", this.props.detalles);

    return (
      <Grid item xs={12}>
        <Card
          style={{
            width: "420px",
            height: "650px",
          }}
        >
          <CardActionArea>
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              <Typography gutterBottom variant="h6" component="h6">
              N.º {this.props.detalles.id}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              <CardMedia
                style={{
                  width: "60%",
                  height: "60%",
                  maxWidth: "350px",
                  maxHeight: "350px",
                }}
                height="150"
                component="img"
                image={this.props.detalles.imagen}
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
                  {this.props.detalles.nombre}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <Typography gutterBottom variant="h6" component="h6">
                  <Chip label={"Peso " + (this.props.detalles.peso/10) + " Kg"} clickable color="primary" />&nbsp;
                  <Chip label={"Altura " + (this.props.detalles.altura * 10) + " Cm"} clickable color="primary" />&nbsp;
                  <Chip label={"Experiencia " + this.props.detalles.hp  + " HP"} clickable color="primary" />
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <Typography gutterBottom variant="h6" component="h6">
                    Estadisticas
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <Typography gutterBottom variant="h6" component="h6">
                {this.props.detalles.experiencia.map((exp, index) => (
                                <Chip label={exp.stat.name + " : " + exp.base_stat} clickable color="primary" />

            ))}
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
    detalles: state.detalles,
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
export default connect(mapStateToProps, mapDispatchToProps)(PokemonesDetalles);
