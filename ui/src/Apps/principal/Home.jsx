import { useState, useEffect } from "react"
import pokeApi from "../../apis/poke.api"
import Images from "./Images"
const Home = () => {
    const [kword, setKword] = useState('')
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const setKwordValue = (e) => {
        setKword(e.target.value)
    }

    useEffect(() => {
        const getPokemon = async () => {
            try {
                setLoading(true)
                const response = await pokeApi.get(`pokemon/${kword}`)
                setPokemon(response.data)
                setError(null)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        getPokemon()
    }, [kword])
    return (
        <div className="row justify-content-md-center">
            <div className="col col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Ingrese datos de Pokemon a buscar</h5>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputPokemon"><i className="bi bi-search"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese nombre de pokemon o ID."
                                aria-describedby="inputPokemon"
                                onChange={setKwordValue}
                            />
                        </div>
                        {loading ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (<>
                            {error ? (
                                <div className="alert alert-danger" role="alert">
                                    {error.message}
                                </div>
                            ) : (<>
                                {pokemon.name ? (
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{pokemon.name}</h5>
                                            <p className="card-text">Peso: {pokemon.weight}</p>
                                            <p className="card-text">Altura: {pokemon.height}</p>
                                            <p className="card-text">Habilidades: {pokemon.abilities.map((item, index) => (
                                                <span key={index}>{item.ability.name}, </span>
                                            ))}</p>
                                            <p className="card-text">Tipos: {pokemon.types.map((item, index) => (
                                                <span key={index}>{item.type.name} </span>
                                            ))}</p>
                                        </div>
                                    </div>
                                ) : (<></>)}
                            </>)}
                        </>)}
                    </div>
                </div>
            </div>
            <div className="col col-lg-6">
                {pokemon.sprites ? (<Images props={pokemon} />) : (<></>)}
            </div>
        </div>
    )
}

export default Home