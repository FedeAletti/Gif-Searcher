import React, { useCallback, useEffect, useRef } from "react"
import Spinner from "components/Spinner/Spinner"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import { useGifs } from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"
import debounce from "just-debounce-it"
import useTitle from "hooks/useTitle"

export default function SearchResults({ params }) {
	const { keyword } = params
	const { loading, gifs, setPage } = useGifs({ keyword })
	const externalRef = useRef()
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	})

	useTitle({ title: `${decodeURI(keyword)} | Gifs` })

	const debounceHandleNextPage = useCallback(
		//eslint-disable-line

		debounce(() => setPage((prevPage) => prevPage + 1), 200),
		[setPage]
	)

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage()
	}, [debounceHandleNextPage, isNearScreen])

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<h3 className="App-title">{decodeURI(keyword)}</h3>
					<ListOfGifs gifs={gifs} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}
		</>
	)
}
