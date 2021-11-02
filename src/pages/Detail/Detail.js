import React from 'react'
import { useLocation } from 'wouter';
import Gif from '../../components/Gif/Gif';
// import Context from '../../context/GifContext';
import useGlobalGifs from '../../hooks/useGlobalGifs';


export default function Detail ({ params }) {

  const [path, pushLocation] = useLocation() //eslint-disable-line

  const gifs = useGlobalGifs()
  
  try {
    const gif = gifs.find(singleGif =>
      singleGif.id === params.id 
  
    )
    console.log(gif)
    return <Gif {...gif} />

  } catch (error) {
    pushLocation(`/`)
    return null
  }  
}