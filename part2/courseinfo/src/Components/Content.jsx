import Parts from './Parts' // importamos el componente Parts.jsx para usarlo dentro del componente Content.jsx
import PropTypes from 'prop-types' // importamos PropTypes para validar los tipos de props que se pasan a los componentes

const Content = ({ parts }) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    return (
        <div>
            {parts.map(part => <Parts key={part.id} part={part} />)}
        </div>
    )
}

Content.propTypes = {
    parts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}

export default Content // exportamos el componente para usarlo en el componente padre (App.jsx)