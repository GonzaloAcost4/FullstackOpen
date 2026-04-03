import PropTypes from 'prop-types'

const StatisticLine = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
)

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default StatisticLine