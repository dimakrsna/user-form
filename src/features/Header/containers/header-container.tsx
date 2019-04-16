import React, { Component } from 'react'

import { TitleComponent } from './../components/title-component'
import { SubtitleComponent } from './../components/subtitle-component'


export default class HeaderContainer extends Component {

    render() {
        return <header className='header'>
            <TitleComponent />
            <SubtitleComponent />
        </header>
    }
}
