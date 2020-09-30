import SqrtReducer, {initialState} from '../reducer';
import {GET_SQRT_OF_NUMBER,
    GET_SQRT_OF_NUMBER_SUCCESS,
    GET_SQRT_OF_NUMBER_FAILURE } from '../constants';

describe('SqrtReducer', () => {
    const payload = {number: 9};

    it('should provide initial state', () => {
        expect(SqrtReducer(undefined, {})).toEqual(initialState)
    });

    it('should update states, when GET_SQRT_OF_NUMBER action dispatched', () => {
        expect(SqrtReducer(initialState, {type: GET_SQRT_OF_NUMBER, payload})).toEqual({...initialState, isGettingSqrt: true, sqrtAnswer: null, apiError: null});
    });

    it('should update isGettingSqrt & sqrtAnswer, when GET_SQRT_OF_NUMBER_SUCCESS action dispatched', () => {
        expect(SqrtReducer(initialState, {type: GET_SQRT_OF_NUMBER_SUCCESS, payload})).toEqual({...initialState, isGettingSqrt: false,sqrtAnswer: payload });
    });

    it('should update isGettingSqrt & apiError, when GET_SQRT_OF_NUMBER_FAILURE action dispatched', () => {
        expect(SqrtReducer(initialState, {type: GET_SQRT_OF_NUMBER_FAILURE, payload: {error: 'Error Message'}})).toEqual({...initialState, isGettingSqrt: false, apiError: {error: 'Error Message'}});
    });
    
})