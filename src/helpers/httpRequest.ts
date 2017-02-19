import * as ax from 'axios';
import {appConfig} from '../appConfig';

const axios = ax.default;

var axiosInstance = axios.create({
    baseURL: appConfig.serverRoot + appConfig.apiRoot,
    timeout: appConfig.timeout,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

const buildUrl = (url: string, parameters?: Object) => {
    let paramString = '';
    let urlString = url;

    for(let key in parameters) {
        paramString += key + '=' + parameters[key] + '&';
    }

    if(paramString[paramString.length] == '&') {
        paramString = paramString.substring(0, paramString.length - 1);
    }

    if(paramString.length > 0) {
        urlString += '?';
    }

    return urlString + paramString;
}

export const GET = (url: string, parameters?: Object, config?: Object) : Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(buildUrl(url, parameters), config).
            then(response => {
                resolve(response);
            }).
            catch(errors => {
                reject(errors);
            });
    });
}

export const POST = (url: string, data?: Object, parameters?: Object, config?: Object) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post(buildUrl(url, parameters), data).
            then(response => {
                resolve(response);
            }).
            catch(errors => {
                reject(errors);
            });
    });
}