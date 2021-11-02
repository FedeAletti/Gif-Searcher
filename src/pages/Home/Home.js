import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import { useGifs } from "../../hooks/useGifs"
import Spinner from "../../components/Spinner/Spinner"


const POPULAR_GIFS = ["Pikachu", "Charizard", "Blastoise", "Psyduck"]

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation() //eslint-disable-line
  const {loading, gifs} = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
        <button>Buscar</button>
      </form>

      <h3 className="App-title">Última búsqueda</h3>

      {loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs} />
      }

      <h3 className="App-title">Gifs de Pokémons</h3>

      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}