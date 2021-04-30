import { INCREASE_COUNTER, DECREASE_COUNTER } from './actionType'


export const increaseAction = (value) => {
    return {
        type: INCREASE_COUNTER,
        payload: value
    }
}
export const decreaseAction = (value) => {
    return {
        type: DECREASE_COUNTER,
        payload: value
    }
}