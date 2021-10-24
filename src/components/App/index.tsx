import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home'

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
