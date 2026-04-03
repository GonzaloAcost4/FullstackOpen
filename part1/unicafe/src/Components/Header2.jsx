import PropTypes from 'prop-types'
const Header2 = ({text}) => (<h2> {text}</h2>)

Header2.propTypes = {
  text: PropTypes.string.isRequired
}
export default Header2