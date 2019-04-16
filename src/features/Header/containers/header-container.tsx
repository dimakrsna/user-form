import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import TitleComponent from './../components/title-component'
import SubtitleComponent from './../components/subtitle-component'

interface IProps {
    currentStep: number
}

class HeaderContainer extends PureComponent<IProps> {

    render() {
        let { currentStep } = this.props
        
        return <header className='header'>
            <TitleComponent currentStep={currentStep} />
            <SubtitleComponent currentStep={currentStep} />
        </header>
    }
}

const mapStateToProps = (state: any) => {
    return { 
        currentStep: state.currentStep 
    }
}

export default connect(mapStateToProps)(HeaderContainer)