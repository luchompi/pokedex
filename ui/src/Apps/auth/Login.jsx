import { useState } from "react"
import Swal from "sweetalert2"
import { GetTokens } from "./services/services.auth"
import { useSessionStore } from "../../store/store.session"
import { UseAuth } from "./services/validators.auth"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const url = useNavigate()
    const setTokens = useSessionStore(state => state.setTokens)
    const isAuth = useSessionStore(state => state.isAuth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const setUserValue = (e) => {
        setUsername(e.target.value)
    }

    const setPasswordValue = (e) => {
        setPassword(e.target.value)
    }

    UseAuth(isAuth)

    const DoLogin = async (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        const response = await GetTokens(data)
        if (response.status === 200) {
            setTokens(response.data)
            Swal.fire({
                title: 'Bienvenido',
                text: 'Iniciando sesión',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            })
            url('/')
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Credenciales incorrectas',
                icon: 'error',
                timer: 2000,
                showConfirmButton: false
            })
        }
    }

    return (
        <div className="col col-lg-6">
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Ingrese sus credenciales</h5>
                    <form onSubmit={DoLogin}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputUsername"><i className="bi bi-person-badge"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="inputUsername"
                                onChange={setUserValue}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputPassword"><i className="bi bi-key"></i></span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="inputPassword"
                                onChange={setPasswordValue}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login