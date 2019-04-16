import React from 'react'

interface IProps {
    onChangeHadler?: any,
    title: string,
    name: string
}

export const FieldComponent = React.memo((props: IProps) => {
    let { onChangeHadler, title, name } = props

    return <div className="field">
        <span className="field__title">{title}</span>
        <input type="text" className="field__input" name={name} onChange={onChangeHadler} />
    </div>
})