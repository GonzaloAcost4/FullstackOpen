import PropTypes from 'prop-types'
const Header1 = ({text}) => (<h1> {text}</h1>)

Header1.propTypes = {
  text: PropTypes.string.isRequired
}
export default Header1