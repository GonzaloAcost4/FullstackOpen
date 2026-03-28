import Parts from './Parts' // importamos el componente Parts.jsx para usarlo dentro del componente Content.jsx

const Content = (props) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
    return (
        <div>
            <Parts part={props.part1} exercises={props.exercises1} />
            <Parts part={props.part2} exercises={props.exercises2} />
            <Parts part={props.part3} exercises={props.exercises3} />
        </div>
    )
}

export default Content // exportamos el componente para usarlo en el componente padre (App.jsx)