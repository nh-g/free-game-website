// NPM Packages
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Project files
import { Item } from 'types'
import ListRender from './ListRender'
import { API_HOST, API_KEY } from './API_KEY'

export default function ListContainer() {
	const [items, setItems] = useState<Item[]>([])
	const [error, setError] = useState<string>('')

	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': API_HOST,
				},
				params: {
					platform: 'browser',
				},
			})
			.then(res => setItems(res.data))
			.catch(e => setError(e.message))
	}, [])

	return <ListRender error={error} items={items} />
}
