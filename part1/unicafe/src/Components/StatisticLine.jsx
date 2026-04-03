import PropTypes from 'prop-types'

const StatisticLine = ({ text, value }) => (
 <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
)

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default StatisticLine