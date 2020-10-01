import {GET_SQRT_OF_NUMBER,
        GET_SQRT_OF_NUMBER_SUCCESS,
        GET_SQRT_OF_NUMBER_FAILURE } from './constants';
import {ofType, Epic} from 'redux-observable';
import SqrtServices from '../../services/sqrt/sqrt';

import {mergeMap, map, catchError,retry, timeout} from 'rxjs/operators';
import {of} from 'rxjs';

import AppConfig from '../../config/app-config';

const {NumberOfAPICallRetryAttempt, APITimeoutDuration} = AppConfig;

export const SqrtEpic:Epic=  (action$) => {
    return action$.pipe(
        ofType(GET_SQRT_OF_NUMBER),
        mergeMap(({payload}) => {
            return SqrtServices.GetSqrtOfInputNumber(payload.number).pipe(
                retry(NumberOfAPICallRetryAttempt),
                timeout(APITimeoutDuration),
                map(response => ({type: GET_SQRT_OF_NUMBER_SUCCESS, payload: (response as any).data.result})),
              catchError(error => of({type: GET_SQRT_OF_NUMBER_FAILURE, payload:error.toString()}))
            )
        })
    )
}

const AllSqrtEpics = [SqrtEpic]
export default AllSqrtEpics;