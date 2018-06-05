import React from 'react'
import { render } from 'react-dom'
import App from 'components/App'
import Input from 'components/Input'

render(
    <div>
        <h1>Hello world</h1>
        {/* on attribut la key onclick et ca value dans les props */}
        <App/>
    </div>,
    document.querySelector('#mount')
)