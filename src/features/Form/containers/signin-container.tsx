import React, { PureComponent, MouseEvent, createRef } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { FieldComponent } from './../components/field-component'
import FieldWrapComponent from './../components/field-wrap-component'
import { ButtonComponent } from './../components/button-component'

import { changeStepAction } from './../actions/changeStepAction'
import { getUserDataAction } from './../actions/getUserDataAction'

interface IData {
    name: string,
    value: string
}

interface IProps {
    dispatch: Dispatch<any>
}

class SigninContainer extends PureComponent<IProps> {

    state = {
        isValid: true 
    }

    getFormData = (elems: []): Array<IData> | boolean => {
        let formData: Array<IData> = []
        let key: any

        for (key of elems) {
            if (key['name'] != 'button') {
                if(key.value){
                    formData.push({
                        name: key['name'],
                        value: key.value
                    })
                } else {
                    this.setState({
                        isValid: false 
                    })

                    return false
                }
            }
        }

        return formData
    }

    onSubmitHandler = (event: any) => {
        event.preventDefault()
        let data = this.getFormData(event.target.elements)

        if(data) {
            this.props.dispatch(getUserDataAction(data))
            this.props.dispatch(changeStepAction(2))
        }
    }

    render() {
        return <form action="" className="form" onSubmit={this.onSubmitHandler}>
            {FieldWrapComponent([<FieldComponent name='email' title='Email address' key='email' />])}
            {FieldWrapComponent([<FieldComponent name='firstName' title='First name' key='firstName' />,
            <FieldComponent name='lastName' title='Last name' key='lastName' />])}
            {FieldWrapComponent([<FieldComponent name='company' title='Company' key='company' />])}
            <p className={`form__note ${(this.state.isValid) ? '' : 'error'}`}>All fields are required.</p>
            <ButtonComponent text="GET STARTED" />
            <p className="form__copyright">© Move Work Forward. All rights reserved. <span className="form__link">Privacy and terms.</span></p>
        </form>
    }
}

export default connect()(SigninContainer)