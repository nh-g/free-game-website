// NPM packages
import { useState, useEffect } from 'react'
import axios from 'axios'

// Project files
import { Item } from 'types'
import { API_HOST, API_KEY } from './constants'
import { Filter } from 'components/List/types'

type Response = {
	items: Item[]
	error: string
}

const useFetch = (params: Filter): Response => {
	const [items, setItems] = useState<Item[]>([])
	const [error, setError] = useState<string>('')
	const { platform, genre, tag, sortBy } = params

	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': API_HOST,
				},
				params: {
					platform,
					category: genre,
					tag,
					'sort-by': sortBy,
				},
			})
			.then(res => setItems(res.data))
			.catch(e => setError(e.message))
	}, [platform, genre, tag, sortBy])

	return {
		items,
		error: error,
	}
}

export default useFetch
