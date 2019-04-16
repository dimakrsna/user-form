import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SigninContainer from './signin-container'
import CompanyInfoContainer from './company-info-container'

interface IProps {
    currentStep: number
}

class FormsWrap extends PureComponent<IProps> {

    checkCurrentStep(){
        let { currentStep } = this.props

        if(currentStep == 1) {
            return <SigninContainer />
        } else if (currentStep == 2) {
            return <CompanyInfoContainer />
        } else if (currentStep == 3) {
            return ''
        }
    }

    render(){
        return <div className="forms-wrap">
            { this.checkCurrentStep() }
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps)(FormsWrap)