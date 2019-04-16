import React from 'react'

type TProps = {
    currentStep: number
}

const TitleComponent: React.SFC<TProps> = (props) => {
    const titles = [
        'Start your free trial now.',
        'Awesome! Please tell us more about your org',
        'Thank you for filling out the form!'
    ]

    let { currentStep } = props
    let currTitle

    if(currentStep == 1){
        currTitle = titles[0]
    } else if (currentStep == 2) {
        currTitle = titles[1]
    } else if(currentStep == 3) {
        currTitle = titles[2]
    }

    return <h1 className="header__title">{currTitle}</h1>
}


export default React.memo(TitleComponent)