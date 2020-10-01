import axios from 'axios';
import {Observable} from 'rxjs';
import AppConfig from '../../config/app-config';

const isDevEnviroment = process.env.NODE_ENV === 'development';

const GetSqrtOfInputNumber = (SqrtInputNumber:number) => {
    const {BASE_URL, PROXY_SERVER_URL} = AppConfig;
    let API_URL = BASE_URL + `?input=${SqrtInputNumber}`;
    if(isDevEnviroment){
        API_URL = PROXY_SERVER_URL + BASE_URL + `?input=${SqrtInputNumber}`;
    }
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