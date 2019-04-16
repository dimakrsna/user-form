import React, { PureComponent, MouseEvent } from 'react'

import { FieldComponent } from './../components/field-component'
import FieldWrapComponent from './../components/field-wrap-component'
import { ButtonComponent } from './../components/button-component'

export default class SigninContainer extends PureComponent {

    buttonHandler = (event: MouseEvent) => {
        event.preventDefault()
    }

    render() {
        return <form action="" className="form">
            {FieldWrapComponent([<FieldComponent name='email' title='Email address' key='email' />])}
            {FieldWrapComponent([<FieldComponent name='firstName' title='First name' key='firstName' />,
            <FieldComponent name='lastName' title='Last name' key='lastName' />])}
            {FieldWrapComponent([<FieldComponent name='company' title='Company' key='company' />])}
            <p className="form__note">All fields are required.</p>
            <ButtonComponent text="GET STARTED" handler={this.buttonHandler} />
            <p className="form__copyright">© Move Work Forward. All rights reserved. <span className="form__link">Privacy and terms.</span></p>
        </form>
    }
}