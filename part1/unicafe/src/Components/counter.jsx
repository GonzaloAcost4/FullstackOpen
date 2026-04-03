import PropTypes from 'prop-types'

const Counter = ({text, counter}) =>  (<p>{text}: {counter}</p>)

Counter.propTypes = {
  text: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter