import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SigninContainer from './signin-container'

interface IProps {
    currentStep: number
}

class FormsWrap extends PureComponent<IProps> {
    render(){
        let { currentStep } = this.props

        return <div className="forms-wrap">
            { (currentStep == 1) ? <SigninContainer /> : '' }
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps)(FormsWrap)