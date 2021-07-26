import React from "react";
import { connect } from "react-redux";
import { iniciarPokemon } from "../redux/tareas";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';

class PokemonesDetalles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados: false, empleados: [] };
      }
  componentDidMount() {}

  render() {
    return (
      <section>
        <Grid container spacing={3}>
          <Paper elevation={3}>
            <Card className={this.props.detalles.nombre}>
              <CardActionArea
              >
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
                      maxWidth: "500px",
                      maxHeight: "500px",
                    }}
                    height="600"
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
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
      </section>
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