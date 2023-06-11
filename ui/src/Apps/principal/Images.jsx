import PropTypes from 'prop-types'
const Images = props => {
  return (
      <div>
          <img src={props.props.sprites.back_default} width={150} height={150} />
          <img src={props.props.sprites.front_default} width={150} height={150} />
    </div>
  )
}

Images.propTypes = {
    props: PropTypes.object.isRequired
}

export default Images