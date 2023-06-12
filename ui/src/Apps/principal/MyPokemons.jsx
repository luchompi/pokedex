import {pokemonStore} from "../../store/pokemon.store.js";
import {Link} from "react-router-dom";

export const MyPokemons = () => {
	const myPokemons = pokemonStore(state => state.pokemon);
	return (
		<>
			{myPokemons.map((item, index) => (
				<div className="col col-lg-3" key={index}>
					<div className="card"  >
						<div className="card-body">
							<h5 className="card-title">Pokemon {item.id}: {item.name}</h5>
							<img src={item.sprites?.front_default} width={150} height={150} alt={item.name}/>
							<p className="card-text">Type(s): {item.types[0]?.type?.name} { item.types[1]?.type?.name ?  ' ' + item.types[1]?.type?.name : ''}
	                        </p>
							<Link to={`/pokemon/${item.id}/details`} className="btn btn-primary">Ver datos</Link>
						</div>
				</div>
				</div>
			))}
		</>
	)
}