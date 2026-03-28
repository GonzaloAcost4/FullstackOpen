const Total = (props) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    return (
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
}

export default Total // exportamos el componente para usarlo en el componente padre (App.jsx)