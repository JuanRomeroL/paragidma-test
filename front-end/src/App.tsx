import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetail from "./PokemonDetail";
import Pokemons from "./Pokemons";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="app-title">Poke App</h1>
        <Routes>
          <Route path="/pokemons" element={<Pokemons />}></Route>
          <Route
            path="/pokemons/:pokemonId"
            element={<PokemonDetail />}
          ></Route>
          <Route path="*" element={<p>Not found Page</p>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
