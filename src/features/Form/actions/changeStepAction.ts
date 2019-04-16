import { CURRENT_STEP } from './../../../store/consts'

export const changeStepAction = (value: number) => {
    return {
        type: CURRENT_STEP,
        payload: value
    }
}