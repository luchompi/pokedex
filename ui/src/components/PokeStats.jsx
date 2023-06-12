import {useParams} from "react-router-dom";
import {pokemonStore} from "../store/pokemon.store.js";

export const PokeStats = () => {
	const pokeID = useParams().id;
	console.log(pokeID)
	const pokemons = pokemonStore(state => state.pokemon);
	const foundPokemon = pokemons.find(pokemon => pokemon.id == pokeID);

	return (
		<>
			{foundPokemon ? (
				<>
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Pokemon {foundPokemon.id}: {foundPokemon.name}</h5>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col col-lg-3">
								<h6>Stats:</h6>
								<div className="alert alert-primary alert-dismissable">
								<strong>HP <i className="bi bi-plus-circle"></i>: </strong>{foundPokemon.stats[0].base_stat} / 255
							</div>
								<div className="alert alert-primary alert-dismissable">
									<strong>ATK <i className="bi bi-lightning"></i>: </strong>{foundPokemon.stats[1].base_stat} / 190
								</div>
								<div className="alert alert-primary alert-dismissable">
									<strong>DEF <i className="bi bi-shield"></i>: </strong>{foundPokemon.stats[2].base_stat} / 250
								</div>
								<div className="alert alert-primary alert-dismissable">
									<strong>ATK-SPEC <i className="bi bi-lightning-charge"></i>: </strong>{foundPokemon.stats[3].base_stat} / 194
								</div>
								<div className="alert alert-primary alert-dismissable">
									<strong>DEF-SPEC <i className="bi bi-shield-fill-plus"></i>: </strong>{foundPokemon.stats[4].base_stat} / 250
								</div>
								<div className="alert alert-primary alert-dismissable">
									<strong>SPD <i className="bi bi-speedometer2"></i>: </strong>{foundPokemon.stats[5].base_stat} / 180
								</div>
							</div>
								<div className="col col-lg-6">
									<h6>Tipo(s): {foundPokemon.types[0]?.type?.name} {foundPokemon.types[1]?.type?.name ? ' - ' + foundPokemon.types[1]?.type?.name : ''} </h6>
								<h6>Habilidades</h6>
									{foundPokemon.abilities.map((item, index) => (
										<div key={index}>
											- {item.ability.name}
										</div>
									))}
							</div>
								<div className="col col-lg-3">
									<div className="row">
										<img src={foundPokemon.sprites?.front_default}/>
										<img src={foundPokemon.sprites?.back_default}/>
									</div>



								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	)
}