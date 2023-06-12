import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import PokeData from "../../components/PokeData"
import { UseAuthRedirect } from "../auth/services/middlewares.auth"
import { useSessionStore } from "../../store/store.session"
import { pokemonStore } from "../../store/pokemon.store"
import { fetchPokemon } from "./services/functions.principal"

const ChoosePokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const pokeballs = pokemonStore(state => state.pokeballs)
    const [loading, setLoading] = useState(false)
    const isAuth = useSessionStore(state => state.isAuth)
    const url = useNavigate()
    UseAuthRedirect(isAuth)
    
    const getPokemons = async () => {
        for (let i = 0; i < 3; i++) {
            const id = Math.floor(Math.random() * 1010) + 1
            try {
                setLoading(true)
                const response = await fetchPokemon(id)
                setPokemon(pokemon => [...pokemon, response.data])
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        if (pokeballs == 0) {            
            getPokemons()
        }
        else {
            url('/my-pokemons')
        }
    }, [url, pokeballs])
    
    
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Estas son tus opciones</h5>
                    <p className="card-text">
                        {loading ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (<>
                            <div className="row">
                                <div className="col">
                                    <PokeData pokemon={pokemon[0]} />
                                </div>
                                <div className="col">
                                    <PokeData pokemon={pokemon[1]} />
                                </div>
                                <div className="col">
                                    <PokeData pokemon={pokemon[2]} />
                                </div>
                            </div>
                        </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChoosePokemon