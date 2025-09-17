import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [something, setsomething] = useState("")
  const [movies, setMovies] = useState("")

  const handleAdd = (e) => {
        e.preventDefault();
        setMovies((oldValue) => [movie, ...oldValue])
  }
  
  return (
    <div className="app">
      <h1>Егор в пяти метрах от вас</h1>
     <form onSubmit={handleAdd} action="" className="movie-form">
               <input type="text" 
    onChange={(value) => setsomething(value.target.value)}
    value={something}></input>
    <button className="add-movie">Добавить</button></form>

    <div className="movie-list"> 
      {movies}
    </div>
    </div>
  )
}

export default App


