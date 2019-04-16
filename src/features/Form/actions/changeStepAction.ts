import { CURRENT_STEP } from './../../../store/consts'

export const changeStepAction = (value: number = 1) => {
    return {
        type: CURRENT_STEP,
        payload: value
    }
}