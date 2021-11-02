import React from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'

export default function SearchResults ({ params }) {
  
  const { keyword } = params
  const {loading, gifs, setPage} = useGifs({keyword})

  const handleNextpage=()=> setPage(prevPage=>prevPage+1)

  return <>
    {loading
      ? 
      <Spinner />
      : 
      <>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
      </>
    }
    <br/>
    <button onClick={handleNextpage}>Get next page</button>
  </>
}