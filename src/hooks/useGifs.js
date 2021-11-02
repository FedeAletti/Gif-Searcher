import {useContext, useEffect, useState} from 'react'
import GifsContext from 'context/GifContext'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export function useGifs ({ keyword } = { keyword: "pokemon" }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)
  
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(function () {
    setLoading(true)
    // recuperamos la keyword del localStorage

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE || loading) return
    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => [...prevGifs, ...nextGifs])
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setGifs])

  return {loading, loadingNextPage, gifs, setPage}
}