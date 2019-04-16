import React from 'react'

type TProps = {
    currentStep: number
}

const TitleComponent: React.SFC<TProps> = (props) => {
    const titles = [
        'Start your free trial now.',
        'Awesome! Please tell us more about your org'
    ]

    let currTitle = (props.currentStep == 1) ? titles[0] : titles[1]
    return <h1 className="header__title">{currTitle}</h1>
}


export default React.memo(TitleComponent)