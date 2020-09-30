import {GET_SQRT_OF_NUMBER} from '../constants';
import { getSqrtOfNumber } from '../actions';

describe('Sqrt Actions', () => {
    it('should create action of GET_SQRT_OF_NUMBER', () => {
        const payload = {number: 16};
        expect(getSqrtOfNumber(payload)).toEqual({
            type: GET_SQRT_OF_NUMBER,
            payload
        })
    })
})
