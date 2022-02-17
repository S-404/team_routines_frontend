import axios, {Method} from 'axios';

const backendAddress = process.env.REACT_APP_BACKEND_ADDRESS

export default class Fetching {
    static async queryData(param: any, querypath: string, method: Method){
        const response = await axios({
            method,
            url: `${backendAddress}/${querypath}`,
            params: {...param},
        })
        return response.data;
    }
}
