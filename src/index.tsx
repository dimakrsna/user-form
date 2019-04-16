import * as React from "react"
import * as ReactDOM from "react-dom"

import { Provider } from 'react-redux'
import './scss/style.scss'

import { App } from './features/App'
import { store } from './store/rootReducer'

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"))