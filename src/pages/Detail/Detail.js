import React from 'react'
import { useLocation } from 'wouter';
import Gif from 'components/Gif/Gif';
import useGlobalGifs from 'hooks/useGlobalGifs';


export default function Detail ({ params }) {

  const [path, pushLocation] = useLocation() //eslint-disable-line

  const gifs = useGlobalGifs()
  
  try {
    const gif = gifs.find(singleGif =>
      singleGif.id === params.id 
  
    )
    console.log(gif)
    return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>

  } catch (error) {
    pushLocation(`/`)
    return null
  }  
}