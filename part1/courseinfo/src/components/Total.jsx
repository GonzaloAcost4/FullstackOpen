const Total = (props) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    return (
        <p>Total exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}

export default Total // exportamos el componente para usarlo en el componente padre (App.jsx)