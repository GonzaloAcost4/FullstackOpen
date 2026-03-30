import Parts from './Parts' // importamos el componente Parts.jsx para usarlo dentro del componente Content.jsx

const Content = ({ parts }) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    return (
        <div>
            <Parts part={parts[0]} />
            <Parts part={parts[1]} />
            <Parts part={parts[2]} />
        </div>
    )
}

export default Content // exportamos el componente para usarlo en el componente padre (App.jsx)