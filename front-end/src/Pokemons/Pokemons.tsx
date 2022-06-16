import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => res.json())
      .then(({ results }) => {
        setPokemons(results);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="pokemon-list">
      <h3>Lista de Pokemones</h3>
      {pokemons.length ? (
        pokemons.map(({ name, url }: any) => (
          <PokemonCard key={url} name={name} url={url} />
        ))
      ) : (
        <p>Cargando ...</p>
      )}
    </div>
  );
};

export default Pokemons;
