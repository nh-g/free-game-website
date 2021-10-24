// NPM Packages
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Project files
import Home from '../Home'
import GlobalStyles from 'components/GlobalStyles'

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}
