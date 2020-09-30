import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './styles.css';

interface ButtonProps {
    placeholderText : string;
    isLoaderEnabled ?: boolean;
    disabled ?: boolean;
    loaderVisibility ?: boolean;
}

 const submitBtnPlaceholder = (placeholderText: string, loaderVisibility: boolean | undefined) => {
    if(loaderVisibility) {
        return <ClipLoader size={13} color={"#123abc"} loading={true} />
    }
    return placeholderText;
}

export default function (props:  ButtonProps) {
    const {disabled, placeholderText, loaderVisibility} = props;
    return  <button className="btn" disabled={disabled}>{submitBtnPlaceholder(placeholderText, loaderVisibility)}</button>;
}