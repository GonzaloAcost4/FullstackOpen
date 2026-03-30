const Header = ({ course }) => { // los props se pasan como argumento a la función hija desde la función padre (App.jsx)
  return (
    <header className="header">
      <h1>{course}</h1>
    </header>
  )
}

export default Header // exportamos el componente para usarlo en el componente padre (App.jsx)