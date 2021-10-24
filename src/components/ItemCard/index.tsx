// NPM Packages
import React from 'react'

// Project files
import { Item } from 'types'
import {
	StyledLink,
	Img,
	Title,
	Details,
	Description,
	Icon,
	Genre,
} from './styles'
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'

interface iProps {
	content: Item
}
export default function ItemCard({ content }: iProps) {
	const { id, title, thumbnail, short_description, genre, platform } = content
	const BROWSER = 'Web Browser'
	const WINDOWS = 'PC (Windows)'

	const icons = platform.split(',').map(p => {
		let icon = null

		switch (p.trim()) {
			case BROWSER:
				icon = (
					<Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />
				)
				break
			case WINDOWS:
				icon = (
					<Icon key={`${id}-windows`} alt="windows icon" src={windowsIcon} />
				)
				break
			default:
				break
		}
		return icon
	})

	const link = `/game/${id}`
	return (
		<StyledLink to={link}>
			<Img src={thumbnail} alt={`${title} logo`} />
			<Details>
				<Title>{title}</Title>
				<Description>{short_description}</Description>
				<Genre>{genre}</Genre>
				{icons}
			</Details>
		</StyledLink>
	)
}
