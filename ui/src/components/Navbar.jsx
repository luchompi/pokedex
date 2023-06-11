import { Link } from "react-router-dom"
import { useSessionStore } from "../store/store.session"
const Navbar = () => {
    const isAuht = useSessionStore(state => state.isAuth)
    const logout = useSessionStore(state => state.logout)
    return (
        <div>

            <header>
                <div className="px-3 py-2 text-bg-dark border-bottom">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                Pokedex
                            </a>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <Link to={'/'} className="nav-link text-secondary">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        Customers
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-2 border-bottom mb-3">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                            <p>{isAuht}</p>
                        </form>

                        {isAuht ? (
                            <div className="text-end">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sesión iniciada
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><Link to={'/my-pokemons'} className="dropdown-item" >My Pokemons</Link></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" onClick={logout}>Salir</a></li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="text-end">
                                <Link to={'/auth/login'} type="button" className="btn btn-light text-dark me-2">Login</Link>
                                <button type="button" className="btn btn-primary">Sign-up</button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Navbar