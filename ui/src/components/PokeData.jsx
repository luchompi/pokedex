import {pokemonStore} from "../store/pokemon.store.js";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
const PokeData = pokemon => {
    const url = useNavigate()
    const setPokemon = pokemonStore(state => state.storePokemon)

    const choosePokemon = () => {
        setPokemon(pokemon.pokemon)
      Swal.fire({
        title: 'Pokemon seleccionado',
        text: `Seleccionaste a ${pokemon.pokemon?.name}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
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