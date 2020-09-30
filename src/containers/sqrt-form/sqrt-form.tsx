import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSqrtOfNumber } from '../../store/sqrt/actions';
import Button from '../../common/button/button';
import './styles.css';

export default function () {
    // Create Root Reducer interface;
    const {isGettingSqrt, sqrtAnswer, apiError} = useSelector(state => (state as any).SqrtReducer);
    const [numberToBeSqrt, setNumberToBeSqrt] = useState(0);
    const dispatch = useDispatch();

    const isSubmitBtnDisabled = (isGettingSqrt === true) || (numberToBeSqrt === 0);

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        dispatch(getSqrtOfNumber({number: numberToBeSqrt}));
      }
      return (
        <div>
            <h1 className='form-heading'>Square Root Form</h1>
            <form onSubmit={handleSubmit} className="form">
              <input  type="number" 
                      step="any" 
                      onChange={(e) => setNumberToBeSqrt(Number(e.target.value))}
                      placeholder="Please enter number"
                       />
                <Button placeholderText="Calculate Square Root"
                        disabled={isSubmitBtnDisabled}
                        loaderVisibility={isGettingSqrt}
                        />
              </form>
            <p className={`${sqrtAnswer ? "success" : "failure"}`}>{sqrtAnswer || apiError}</p>
      </div>
    )
}