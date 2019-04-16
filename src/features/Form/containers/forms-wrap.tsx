import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SigninContainer from './signin-container'
import CompanyInfoContainer from './company-info-container'
import ProfileInfoComponent from './../../Profile/components/ProfileInfoComponent'

interface IProps {
    currentStep: number,
    userData: any[]
}

class FormsWrap extends PureComponent<IProps> {

    checkCurrentStep(){
        let { currentStep, userData } = this.props

        if(currentStep == 1) {
            return <SigninContainer />
        } else if (currentStep == 2) {
            return <CompanyInfoContainer />
        } else if (currentStep == 3) {
            return <ProfileInfoComponent userData={userData} />
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
        currentStep: state.currentStep,
        userData: state.userData
    }
}

export default connect(mapStateToProps)(FormsWrap)