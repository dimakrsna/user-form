import React from 'react'

interface IProps {
    text: string,
    handler?: any
}

export const ButtonComponent = React.memo((props: IProps): JSX.Element => {
    let { text, handler } = props
    return <button className="form__button" name="button" onClick={handler}>{text}</button>
})