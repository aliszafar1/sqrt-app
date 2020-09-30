import axios from 'axios';
import {Observable} from 'rxjs';
import AppConfig from '../../config/app-config';

const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com/';
const isDevEnviroment = process.env.NODE_ENV === 'development';

const GetSqrtOfInputNumber = (SqrtInputNumber:number) => {
    let API_URL = (AppConfig as any).BASE_URL + `?input=${SqrtInputNumber}`;
    if(isDevEnviroment){
        API_URL = PROXY_SERVER_URL + (AppConfig as any).BASE_URL + `?input=${SqrtInputNumber}`;
    }
    // console.log(API_URL);
    return new Observable(observer => {
        axios.get(API_URL)
        .then((data)=> {
            observer.next(data);
            observer.complete();
        })
        .catch(error => (observer.error(error)));
        }
)};
const SqrtServices = {GetSqrtOfInputNumber}

export default SqrtServices;