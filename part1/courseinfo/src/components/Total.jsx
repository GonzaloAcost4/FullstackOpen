const Total = (props) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    return (
        <p>Total exercises: {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    )
}

export default Total // exportamos el componente para usarlo en el componente padre (App.jsx)