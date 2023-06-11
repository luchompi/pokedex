import {pokemonStore} from "../store/pokemon.store.js";
import {useNavigate} from "react-router-dom";

const PokeData = pokemon => {
    const url = useNavigate()
    const setPokemon = pokemonStore(state => state.storePokemon)

    const choosePokemon = () => {
        setPokemon(pokemon.pokemon)
        console.log('Pokemon seleccionado: ', pokemon.pokemon)
        url('/')
    }
  return (
      <div>
          <div className="card">
            
            <div className="card-body">
                  <h5 className="card-title">{pokemon.pokemon?.name}</h5>
                  <img src={pokemon.pokemon?.sprites?.front_default} align="center" width={150} height={150} />
                  <p>
                      Type: {pokemon.pokemon?.types[0]?.type?.name} { pokemon.pokemon?.types[1]?.type?.name ?  ' ' + pokemon.pokemon?.types[1]?.type?.name : ''} 
                      <br />
                        
                  </p>
              <a className="btn btn-primary" onClick={choosePokemon}>Seleccionar</a>
            </div>
          </div>
    </div>
  )
}

export default PokeData