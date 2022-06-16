import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDetail.css";

const PokemonDetail = () => {
  const [pokeData, setPokeData] = useState({
    name: "",
    weight: "",
    height: "",
    sprites: { back_default: "" },
    location_area_encounters: "",
    moves: [],
    abilities: [],
    types: [],
  });
  const params = useParams();
  const { pokemonId } = params;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((result) => {
        setPokeData(result);
        console.log(result);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="pokemon-detail">
      <div className="detail-col">
        <h3>{pokeData.name}</h3>
        <img className="detail-img" src={pokeData.sprites.back_default}></img>
        <p>
          <b>ID:</b> {params.pokemonId}
        </p>
        <p>
          <b>Weight:</b> {pokeData.weight}
        </p>
        <p>
          <b>Height:</b> {pokeData.height}
        </p>
        <p>
          <b>Location:</b> {pokeData.location_area_encounters}
        </p>

        <p>
          <b>Types</b>
        </p>
        <ol>
          {pokeData.types.length ? (
            pokeData.types.map((item: any) => (
              <li key={item.type.url}>{JSON.stringify(item.type.name)}</li>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </ol>

        <p>
          <b>Abilities</b>
        </p>
        <ol>
          {pokeData.abilities.length ? (
            pokeData.abilities.map((item: any) => (
              <li key={item.ability.url}>
                {JSON.stringify(item.ability.name)}
              </li>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </ol>
      </div>
      <div className="detail-col">
        <p>
          <b>Moves</b>
        </p>
        <ol>
          {pokeData.moves.length ? (
            pokeData.moves.map((item: any) => (
              <li key={item.move.url}>{JSON.stringify(item.move.name)}</li>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default PokemonDetail;
