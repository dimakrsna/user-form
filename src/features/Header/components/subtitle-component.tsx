import React from 'react'

type TProps = {
    currentStep: number
}

const SubtitleComponent: React.SFC<TProps> = (props) => {
    const subtitles = [
        'You’re minutes away from insights.',
        'To provide better experience with Ally',
        ''
    ]

    let { currentStep } = props
    let currSubtitle

    if(currentStep == 1){
        currSubtitle = subtitles[0]
    } else if (currentStep == 2) {
        currSubtitle = subtitles[1]
    } else if(currentStep == 3) {
        currSubtitle = subtitles[2]
    }

    return <p className="header__subtitle">{currSubtitle}</p>
}

export default React.memo(SubtitleComponent)