import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spsomething from './components/something/Something'
import { genres } from './utils/genre'

function App() {
  const [something, setsomething] = useState("")
  const [score, setScore] = useState(2)
  const [movies, setMovies] = useState(() => {
    return (JSON.parse(localStorage.getItem("movies")) || []
  )
   || [] })

  const [desc, setDesc] = useState("");
  const[genre, SetGenre] = useState(Object.entries(genres)[0][0])
  const[filterstring, setfilterstring] = useState("")
  const[filterMovies, setfilterMovies] = useState(movies)


  useEffect(() => {
    setfilterMovies(movies.filter((movie) => movie.name.includes(filterstring)));
  }, [filterstring, movies])

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies))
  }, [movies])



  const handleAdd = (e) => {
    e.preventDefault()
    const newMovie = {
      id: crypto.randomUUID(),
      name: something,
      score,
      genre,
      desc
    }
    setMovies((oldValue) => [newMovie, ...oldValue])
    setsomething("")
    setScore(2)
    setDesc("")
  }

  return (
    <div className="app">
      <h1>Фильмы</h1>
      <form onSubmit={handleAdd} action="" className="movie-form">
        <input type="text"
          onChange={(value) => setsomething(value.target.value)}
          value={something}></input>

        <input type="range" min={0} max={4} value={score} onChange={(v) => setScore(v.target.value)}/>
        {+score + 1}

        <select value={genre} onChange={(v) => SetGenre(v.target.value)}>
          {Object.entries(genres).map((genre) => (
            <option value = {genre[0]}>{genre[1]}</option>
          ))}

        </select>



        <textarea value={desc} onChange={(value) => setDesc(value.target.value)}></textarea>



        <button className="add-movie">Добавить</button></form>
        <div className="search">
          <h2>Поиск</h2>
           <input type="text" value={filterstring} onChange={(v) => setfilterstring(v.target.value)}/>
        </div>

      <div className="movie-list">
        {filterMovies.map((el) => (
          <Spsomething key={el.id} {...el} />
        ))}
      </div>
    </div>
  )
}

export default App


