import React, { ChangeEvent } from 'react'
import { PLATFORMS, GENRES, TAGS, SORT_BY } from './fileds'
import SelectFields from './SelectFields'
import { Form } from './styles'

interface iProps {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

export default function Filter({ onChange }: iProps) {
	return (
		<Form>
			<SelectFields labelName="platform" fieldData={PLATFORMS} />
			<SelectFields labelName="genre" fieldData={GENRES} />
			<SelectFields labelName="tag" fieldData={TAGS} />
			<SelectFields labelName="sort-by" fieldData={SORT_BY} />
		</Form>
	)
}
