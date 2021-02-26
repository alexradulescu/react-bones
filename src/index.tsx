import React from 'react'
import { render } from 'react-dom'
import { setup } from 'goober'

import App from './App'

setup(React.createElement)

const rootElement = document.getElementById('root')
render(<App />, rootElement)
