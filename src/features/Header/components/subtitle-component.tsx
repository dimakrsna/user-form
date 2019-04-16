import React from 'react'

type TProps = {
    currentStep: number
}

const SubtitleComponent: React.SFC<TProps> = (props) => {
    const subtitles = [
        'You’re minutes away from insights.',
        'To provide better experience with Ally'
    ]

    let currSubtitle = (props.currentStep == 1) ? subtitles[0] : subtitles[1]
    return <p className="header__subtitle">{currSubtitle}</p>
}

export default React.memo(SubtitleComponent)