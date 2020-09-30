import {createStore, applyMiddleware, Store} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import RootReducer from './root-reducer';
import RootEpic from './root-epic';

const epicMiddleware = createEpicMiddleware();

export default function(){
    const store =  createStore(RootReducer, applyMiddleware(epicMiddleware));
        epicMiddleware.run(RootEpic);
    
        return store;
}