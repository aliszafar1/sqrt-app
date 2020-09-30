import React from 'react';
import { Provider } from "react-redux";
import { render, cleanup } from '@testing-library/react';
import FormComponent from '../sqrt-form';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const initialState = {SqrtReducer: {isGettingSqrt: false}};
let store = mockStore(initialState);

describe('Sqrt Form Component', () => {
    let UI:React.ReactElement;
    beforeEach(() => {
         UI = <Provider store={store}><FormComponent /></Provider>;
        });
    afterEach(() => {
            store.clearActions();
            cleanup();
        });
        it('should render form', () => {
        const {queryByText} = render(UI);
        expect(queryByText('Square Root Form')).toBeInTheDocument();
    });

    it('should display error text', () => {
        const {queryByText, rerender} = render(UI);

        expect(queryByText('Square Root Form')).toBeInTheDocument();

        const error = 'Network Error';
        const updatedState = {SqrtReducer: {isGettingSqrt: false, apiError: error }};
        store = mockStore(updatedState);
        rerender(<Provider store={store}><FormComponent /></Provider>);
        expect(queryByText(error)).toBeInTheDocument();

    });

    it('should display success response text', () => {
        const { queryByText , rerender} = render(UI);

        expect(queryByText('Square Root Form')).toBeInTheDocument();

        const updatedState = {SqrtReducer: {isGettingSqrt: false, sqrtAnswer: 3 }};
        store = mockStore(updatedState);
        
        rerender(<Provider store={store}><FormComponent /></Provider>);
       
        expect(queryByText('3')).toBeInTheDocument();
    })
})