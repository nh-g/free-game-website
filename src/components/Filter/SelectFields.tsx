import React from 'react'
import { Label, Select } from './styles'

interface iFieldData {
	value: string
	display: string
}
interface iProps {
	labelName: string
	fieldData: Array<iFieldData>
	fieldSelect: string
}

export default function SelectFields({
	labelName,
	fieldData,
	fieldSelect,
}: iProps) {
	return (
		<Label htmlFor={fieldSelect}>
			{labelName.charAt(0).toUpperCase() + labelName.slice(1)}:
			<Select name={labelName} id={fieldSelect}>
				{fieldData.map(item => (
					<option key={item.value} value={item.value}>
						{item.display}
					</option>
				))}
			</Select>
		</Label>
	)
}
