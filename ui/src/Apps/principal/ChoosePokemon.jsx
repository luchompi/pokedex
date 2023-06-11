import { useEffect, useState } from "react"
import pokeApi from "../../apis/poke.api"
import PokeData from "../../components/PokeData"
import { useNavigate } from "react-router-dom"
import { UseAuth } from "../auth/services/validators.auth"
import { useSessionStore } from "../../store/store.session"

const ChoosePokemon = () => {
    const url = useNavigate()
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const isAuth = useSessionStore(state => state.isAuth)
    useEffect(() => {
        const getPokemons = async () => {
            for (let i = 0; i < 3; i++) {
                const id = Math.floor(Math.random() * 1010) + 1
                try {
                    setLoading(true)
                    const response = await pokeApi.get(`pokemon/${id}`)
                    setPokemon(pokemon => [...pokemon, response.data])
                    setLoading(false)
                }
                catch (error) {
                    setLoading(false)
                    console.log(error)
                }
            }
        }
        getPokemons()
    }, [])

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