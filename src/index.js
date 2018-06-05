import React from 'react'
import { render } from 'react-dom'
import Button from 'components/Button'
import Input from 'components/Input'

render(
    <div>
        <h1>Hello world</h1>
        {/* on attribut la key onclick et ca value dans les props */}
        <Button/>
        <Input/>
    </div>,
    document.querySelector('#mount')
)