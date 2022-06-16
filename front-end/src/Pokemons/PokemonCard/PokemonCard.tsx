import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PokemonCard = ({ name, url }: any) => {
  const [avatar, setAvatar] = useState("");
  const [pokeId, setPokeId] = useState(1);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeId(data.id);
        setAvatar(data.sprites.back_default);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="pokemon-card">
      <div className="col-1">
        <img src={avatar} alt="..." />
      </div>
      <div className="col-2">
        <p>{name}</p>
        <p>{url}</p>
        <NavLink to={`/pokemons/${pokeId}`}>Mas ...</NavLink>
      </div>
    </div>
  );
};

export default PokemonCard;
