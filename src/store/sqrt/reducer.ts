import {GET_SQRT_OF_NUMBER,
    GET_SQRT_OF_NUMBER_SUCCESS,
    GET_SQRT_OF_NUMBER_FAILURE } from './constants';

interface SqrtStateModel {
    isGettingSqrt: boolean;
    sqrtAnswer ?: number;
    apiError ?: string;
}

interface ActionModel {
    type: string,
    payload: null | object | string
}


export const initialState: SqrtStateModel = {
    isGettingSqrt: false,
}

export default function SqrtReducer(state: SqrtStateModel = initialState, actions: ActionModel | {}) {
    const {type, payload} = actions as ActionModel;
    switch (type){
        case GET_SQRT_OF_NUMBER:
            return {
                ...state,
                isGettingSqrt: true,
                sqrtAnswer: null,
                apiError: null
            }
        case GET_SQRT_OF_NUMBER_SUCCESS:
            return {
                ...state,
                isGettingSqrt: false,
                sqrtAnswer: payload
            }
        case GET_SQRT_OF_NUMBER_FAILURE:
            return {
                ...state,
                isGettingSqrt: false,
                apiError: payload
            }
        default:
           return state;
    }

}