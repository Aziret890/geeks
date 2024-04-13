import axios from "axios";
import { useEffect, useState } from "react";
function CardDetail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        const pokemonArray = res.data.results;
        setData(pokemonArray);
      })
      .catch((error) => {
        console.error("ошибка", error);
      });
  }, []);

  return (
    <>
      <section>
        <div className="card">
          {data.map((pokemon, id) => (
            <ul key={id} className="card__pokemon">
              <li style={{ listStyle: "none" }} className="card__li">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    id + 1
                  }.png`}
                  alt=""
                />
              </li>
              <li style={{listStyle:'none'}} className="card__li">{pokemon.name}</li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
}

export default CardDetail;
