import PropTypes from 'prop-types'

const Total = ({ parts }) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <b>Total Exercises: {totalExercises}</b>
    )
}

Total.propTypes = {
    parts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}

export default Total // exportamos el componente para usarlo en el componente padre (App.jsx)