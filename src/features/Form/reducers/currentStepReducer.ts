import { CURRENT_STEP } from './../../../store/consts'

export const currentStepReducer = (state: number = 1, action: any) => {
    switch(action.type){
        case CURRENT_STEP:
            return action.payload
    }

    return state
}