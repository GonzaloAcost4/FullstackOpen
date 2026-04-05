import PropTypes from 'prop-types'

const Parts = ({part}) => {
    return (
        <div>
            <p>{part.name}: {part.exercises}</p> 
        </div>
    )
}

Parts.propTypes = {
    part: PropTypes.shape({
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired
    }).isRequired
}
export default Parts