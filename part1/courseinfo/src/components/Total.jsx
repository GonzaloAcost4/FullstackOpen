const Total = ({ parts }) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    return (
        <p>Total exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    )
}

export default Total // exportamos el componente para usarlo en el componente padre (App.jsx)