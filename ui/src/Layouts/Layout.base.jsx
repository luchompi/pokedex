import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useSessionStore } from "../store/store.session"
import { pokemonStore } from "../store/pokemon.store"
import message from "../Apps/principal/message"
const Layout = () => {
    const isAuth = useSessionStore(state => state.isAuth)
    const pokeballs = pokemonStore(state => state.pokeballs)

    return (
        <div>
            <Navbar />
            <div className="row justify-content-md-center">
                <div className="col col-lg-10">
                    <div className="card" >
                        <div className="card-body">
                            <h2 className="card-title">Centro Pokemón de Pueblo XXXX</h2>
                            {isAuth ? (
                                pokeballs == 0 ? (
                                    message()
                                ) :<>Tienes {pokeballs} pokebolas, por lo que tienes {pokeballs} pokemones capturados</>
                            ) : <></>}
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout