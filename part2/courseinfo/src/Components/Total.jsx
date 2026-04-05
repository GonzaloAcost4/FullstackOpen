const Total = ({ parts }) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <b>Total Exercises: {totalExercises}</b>
    )
}

export default Total // exportamos el componente para usarlo en el componente padre (App.jsx)