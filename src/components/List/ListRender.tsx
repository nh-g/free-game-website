// NPM Packages
import React from 'react'

// Project files
import { Item } from 'types'
import ItemCard from 'components/ItemCard'

interface iProps {
	error?: string
	items: Item[]
}

export default function ListRender({ error, items }: iProps) {
	if (error) {
		return <p>{error} No games available</p>
	}
	if (!items?.length) {
		return <p>No item to show now. More are coming soon</p>
	}
	return (
		<ul>
			{items.map(item => (
				<li key={item.id}>
					<ItemCard content={item} />
				</li>
			))}
		</ul>
	)
}
