import React from 'react'
import { Label, Select } from './styles'

interface iFieldData {
	value: string
	display: string
}
interface iProps {
	labelName: string
	fieldData: Array<iFieldData>
}

export default function SelectFields({ labelName, fieldData }: iProps) {
	return (
		<Label htmlFor="platform-select">
			{labelName.charAt(0).toUpperCase() + labelName.slice(1)}:
			<Select name={labelName} id="platform-select">
				{fieldData.map(item => (
					<option key={item.value} value={item.value}>
						{item.display}
					</option>
				))}
			</Select>
		</Label>
	)
}
