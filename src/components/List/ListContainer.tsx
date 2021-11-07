// NPM Packages
import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react'

// Project files
import useFetch from 'hooks/useFetch'
// import { Item } from 'types'
import ListRender from './ListRender'
import { Filter } from './types'

export default function ListContainer() {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})

	const { items, error } = useFetch(filter)

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[event.target.name]: event.target.value,
		}))
		event.preventDefault()
	}, [])

	return (
		<ListRender error={error} items={items} onFilterChange={onFilterChange} />
	)
}
