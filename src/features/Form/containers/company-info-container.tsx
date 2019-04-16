import React, { PureComponent, MouseEvent, createRef } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { FieldComponent } from './../components/field-component'
import FieldWrapComponent from './../components/field-wrap-component'
import { ButtonComponent } from './../components/button-component'
import { TagInput } from './../components/tags-field-component'

import { changeStepAction } from './../actions/changeStepAction'
import { getUserDataAction } from './../actions/getUserDataAction'

interface IData {
    name: string,
    value: string
}

interface IProps {
    dispatch: Dispatch<any>
}

class CompanyInfoContainer extends PureComponent<IProps> {

    state = {
        isValid: true 
    }

    getFormData = (elems: []): Array<IData> | boolean => {
        let formData: Array<IData> = []
        let key: any

        for (key of elems) {
            if (key['name'] != 'button' && key['name'] != 'hidden') {
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
            this.props.dispatch(changeStepAction(3))
        }
    }

    render() {
        return <form action="" className="form" onSubmit={this.onSubmitHandler}>
            <TagInput name="tools" title="My company uses the following tools"/>
            <TagInput name="messagingPlatform" title="Our messaging platform"/>
            {FieldWrapComponent([<FieldComponent name='role' title='My role' key='role' />]) }
            <p className={`form__note ${(this.state.isValid) ? '' : 'error'}`}>All fields are required.</p>
            <ButtonComponent text="CONTINUE" />
        </form>
    }
}

export default connect()(CompanyInfoContainer)