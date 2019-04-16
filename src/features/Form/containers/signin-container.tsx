import React, { PureComponent, MouseEvent, createRef } from 'react'

import { FieldComponent } from './../components/field-component'
import FieldWrapComponent from './../components/field-wrap-component'
import { ButtonComponent } from './../components/button-component'

interface IData {
    name: string,
    value: string
}

export default class SigninContainer extends PureComponent {

    getFormData = (elems: []): Array<IData> => {
        let formData: Array<IData> = []
        let key: any

        for (key of elems) {
            if (key['name'] != 'button') {
                formData.push({
                    name: key['name'],
                    value: key.value
                })
            }
        }

        return formData
    }

    validateFields(){

    }

    onSubmitHandler = (event: any) => {
        event.preventDefault()
        let formElems = event.target.elements

        console.log(this.getFormData(formElems))
        // this.validateFields()
    }

    render() {
        return <form action="" className="form" onSubmit={this.onSubmitHandler}>
            {FieldWrapComponent([<FieldComponent name='email' title='Email address' key='email' />])}
            {FieldWrapComponent([<FieldComponent name='firstName' title='First name' key='firstName' />,
            <FieldComponent name='lastName' title='Last name' key='lastName' />])}
            {FieldWrapComponent([<FieldComponent name='company' title='Company' key='company' />])}
            <p className="form__note">All fields are required.</p>
            <ButtonComponent text="GET STARTED" />
            <p className="form__copyright">© Move Work Forward. All rights reserved. <span className="form__link">Privacy and terms.</span></p>
        </form>
    }
}