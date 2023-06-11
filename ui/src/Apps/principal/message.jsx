import { Link } from "react-router-dom"

const message = () => {
  return (
      <div>
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Mensaje del profesor Oak!</strong>
              <p>Parece que te no tienes pokemones, ¿por qué no aceptas uno de los que te ofrezco?</p>
              <Link to={'/choose'} className="btn btn-success">Sí, claro.</Link>
          </div>
    </div>
  )
}

export default message