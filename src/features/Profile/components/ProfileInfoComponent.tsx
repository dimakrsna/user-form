import React from 'react'


interface IUserData {
    name: string,
    value: string
}

type TProps = {
    userData: IUserData[]
}

const ProfileInfoComponent: React.SFC<TProps> = (props) => {
    let { userData } = props

    return <div>{
        userData && userData.map((item: IUserData, key)=>{
            return <p key={`info-${key}`}>{item.name} : {item.value}</p>
        })
    }</div>
}

export default React.memo(ProfileInfoComponent)