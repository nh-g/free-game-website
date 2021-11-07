import React, { ChangeEvent } from 'react'
import { PLATFORMS, GENRES, TAGS, SORT_BY } from './fileds'
import SelectFields from './SelectFields'
import { Form } from './styles'

interface iProps {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

export default function Filter({ onChange }: iProps) {
	return (
		<Form onChange={onChange}>
			<SelectFields
				labelName="platform"
				fieldData={PLATFORMS}
				fieldSelect="platform-select"
			/>
			<SelectFields
				labelName="genre"
				fieldData={GENRES}
				fieldSelect="genre-select"
			/>
			<SelectFields labelName="tag" fieldData={TAGS} fieldSelect="tag-select" />
			<SelectFields
				labelName="sortBy"
				fieldData={SORT_BY}
				fieldSelect="sortBy-select"
			/>
		</Form>
	)
}
