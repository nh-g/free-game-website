// NPM Packages
import React, { ChangeEvent } from 'react'

// Project files
import { Item } from 'types'
import ItemCard from 'components/ItemCard'
import { List, ListItem } from './styles'
import Filter from 'components/Filter'

interface iProps {
	error?: string
	items: Item[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

export default function ListRender({ error, items, onFilterChange }: iProps) {
	if (error) {
		return <p>{error} No games available</p>
	}
	if (!items?.length) {
		return <p>No item to show now. More are coming soon</p>
	}
	return (
		<>
			<Filter onChange={onFilterChange} />
			<List>
				{items.map(item => (
					<ListItem key={item.id}>
						<ItemCard content={item} />
					</ListItem>
				))}
			</List>
		</>
	)
}
