import React from 'react'

export default function FieldWrapComponent(WrappedComponents: any[]) {
    return ((ChildComponent: any[]) => {
        return <div className="field-wrap">{ChildComponent && ChildComponent.map(
            (fieldComponent) => {return fieldComponent}
        )}</div>
    })(WrappedComponents)
}