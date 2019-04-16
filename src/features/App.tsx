import React, { Component } from "react"

import HeaderContainer from './../features/Header/containers/header-container'
import FormsWrap from './../features/Form/containers/forms-wrap'

export class App extends Component {

    render() {
        return (
            <section className="wrapper">
               <HeaderContainer />
               <FormsWrap />
            </section>
        )
    }
}
