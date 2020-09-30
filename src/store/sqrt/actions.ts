import {GET_SQRT_OF_NUMBER} from './constants';

interface GettingNumberToBeSqrt {
    number: number
}

export interface GetSqrtOfNumberAction {
    type: typeof GET_SQRT_OF_NUMBER,
    payload: GettingNumberToBeSqrt
}

export const  getSqrtOfNumber = (payload: GettingNumberToBeSqrt): GetSqrtOfNumberAction  => {
    return {
        type: GET_SQRT_OF_NUMBER,
        payload
    }
}