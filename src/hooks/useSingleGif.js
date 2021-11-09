import { useEffect, useState } from "react"
import getSingleGif from "services/getSingleGif"
import { useGifs } from "./useGifs"

export default function useSingleGif({ id }) {
	const { gifs } = useGifs()
	const gifFromCache = gifs.find((singleGif) => singleGif.id === id)

	const [gif, setGif] = useState(gifFromCache)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		if (!gif) {
			setIsLoading(true)
			// Llamar al servicio si no tenemos gif
			getSingleGif({ id })
				.then((gif) => {
					setGif(gif)
					setIsLoading(false)
				})
				.catch(() => {
					setIsLoading(false)
					setIsError(true)
				})
		}
	}, [id, gif])

	return { gif, isLoading, isError }
}
