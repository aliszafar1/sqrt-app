import {SqrtEpic} from '../epic';
import {createStore, applyMiddleware } from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import combineReducers from '../../root-reducer';
import {GET_SQRT_OF_NUMBER, GET_SQRT_OF_NUMBER_SUCCESS} from '../constants';
import configureStore, {MockStoreCreator} from 'redux-mock-store';
import RootEpic from '../../root-epic';


describe('Sqrt Epic Testing', () => {
    let mockStore : MockStoreCreator;
    beforeEach(() => {
        const epicMiddleware = createEpicMiddleware();
        const middlewares = [epicMiddleware];
        mockStore = configureStore(middlewares);
        epicMiddleware.run(RootEpic);
    });
    it('should dispatch action', async () => {
        const initialState = {};
        const store = mockStore(initialState);
        store.dispatch({type: GET_SQRT_OF_NUMBER, payload:{number: 89}});
        console.log('inside epic testing', store.getActions());
        // expect({type: GET_SQRT_OF_NUMBER_SUCCESS}).toBeCalled();
        // expect(SqrtEpic().subscribe())
    });
});