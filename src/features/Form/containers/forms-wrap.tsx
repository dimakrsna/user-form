import React, { Component } from 'react'

import SigninContainer from './signin-container'

export default class FormsWrap extends Component {

    render(){
        return <div className="forms-wrap">
            <SigninContainer />
        </div>
    }
}