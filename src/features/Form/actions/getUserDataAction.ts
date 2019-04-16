import { USER_DATA } from './../../../store/consts'


export const getUserDataAction = (value: any) => {
    return {
        type: USER_DATA,
        payload: value
    }
}