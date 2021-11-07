// NPM packages
import React, { ReactElement } from 'react'

// Project files
import ItemList from 'components/List'
import withErrorBoundary from 'hoc/withErrorBoundary'

const Home = (): ReactElement => (
	<main>
		<ItemList />
	</main>
)

export default withErrorBoundary(Home)
