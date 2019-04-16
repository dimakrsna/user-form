import { USER_DATA } from './../../../store/consts'

export const userDataReducer = (state: any[] = [], action: any) => {
    switch(action.type){
        case USER_DATA:
            return [
                ...state, ...action.payload 
            ]
    }

    return state
}