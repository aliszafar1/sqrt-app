import { Subject, of, throwError } from 'rxjs';
import {SqrtEpic} from '../epic';
import {GET_SQRT_OF_NUMBER, GET_SQRT_OF_NUMBER_SUCCESS, GET_SQRT_OF_NUMBER_FAILURE} from '../constants';
import SqrtServices from '../../../services/sqrt/sqrt';


describe('Sqrt Epic Testing', () => {
    let MockApi:jest.SpyInstance, action$: any, resultActions: any ;
    beforeEach(() => {
       const initialState = {};
        action$ = new Subject();
        SqrtEpic((action$ as any), (initialState as any), {})
        .subscribe((res) => resultActions = res)
    });
    afterEach(() => {
        MockApi.mockReset();
    })
    it('should dispatch action', async () => {
       MockApi = jest.spyOn(SqrtServices, 'GetSqrtOfInputNumber').mockReturnValue(of(
           {data: {result: '4.0'}}           
           ));
        action$.next({type: GET_SQRT_OF_NUMBER, payload:{number: 89}});
        expect(resultActions).toEqual({type: GET_SQRT_OF_NUMBER_SUCCESS, payload:'4.0'})
    });
    it('should dispatch action', async () => {
        const ErrorMessage = new Error ('Network Error');  
       MockApi = jest.spyOn(SqrtServices, 'GetSqrtOfInputNumber').mockReturnValue(throwError(ErrorMessage));

        action$.next({type: GET_SQRT_OF_NUMBER, payload:{number: 89}});
        expect(resultActions).toEqual({type: GET_SQRT_OF_NUMBER_FAILURE, payload: ErrorMessage.toString()})
    });


});