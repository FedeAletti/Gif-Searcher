import React, { useState } from "react"
import { useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import { useGifs } from "../../hooks/useGifs"
import Category from "../../components/Category/Category"


const POPULAR_GIFS = ["Pikachu", "Charizard", "Blastoise", "Psyduck"]

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation() //eslint-disable-line
  const {loading, gifs} = useGifs() //eslint-disable-line

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

        <input placeholder="Search a gif here..." 
        onChange={handleChange} 
        type='text' value={keyword} />

      </form>

      <div className="App-main">

        <div className="App-results">

          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />

        </div>

        <div className="App-category">
          <Category
            name="Pokémons"
            options={POPULAR_GIFS}
          />
          <Category
            name="Mascotas"
            options={['Perros', 'Gatos', 'Hamster']}
          />
        </div>
      </div>
    </>
  )
}