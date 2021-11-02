import React, { useEffect,useState } from 'react'
import Gif from '../Gif/Gif'
import './ListOfGifs.css'

export default function ListOfGifs ({gifs}) {
    const [gifsLoaded, setGifsLoaded] = useState(false)

    useEffect(() => {
        setGifsLoaded(true)
    }, [gifs])

    return <div className='ListOfGifs'>

        {   gifsLoaded && gifs.map((gif) => {
            return(
                <Gif
                    id={gif.id}
                    key={gif.id}
                    title={gif.title}
                    url={gif.url}
                />)}
            )
        }
    </div>
}