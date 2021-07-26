import Pokemones from "./componentes/Pokemones";
import PokemonesDetalles from "./componentes/detalles";
import Grid from "@material-ui/core/Grid";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Pokemones />
        </Grid>
        <Grid item xs={4}>
          <PokemonesDetalles />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
