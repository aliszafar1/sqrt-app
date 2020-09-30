import SqrtServices from '../sqrt';
import MockAdapter from "axios-mock-adapter";
import axios from 'axios';
const mock = new MockAdapter(axios);

describe('Sqrt Service', () => {
    let response:any;
    it('should return GetSqrtOfInputNumber',async () => {
        mock.onAny().reply(200, {result: '4.0'});
        response = await  SqrtServices.GetSqrtOfInputNumber(16).toPromise()
        expect(response.data.result).toEqual('4.0')
    })
 });