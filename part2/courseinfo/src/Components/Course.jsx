import Content from './Content' // importamos el componente Content.jsx para usarlo dentro del componente Course.jsx
import Header from './Header' // importamos el componente Header.jsx para usarlo dentro del componente Course.jsx
import PropTypes from 'prop-types' // importamos PropTypes para validar los tipos de props que se pasan a los componentes

const Course = ({ course }) =>  {
    return ( 
        <div> 
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

Course.propTypes = {
    course: PropTypes.shape({
        name: PropTypes.string.isRequired,
        parts: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            exercises: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired
        })).isRequired
    }).isRequired
}

export default Course 