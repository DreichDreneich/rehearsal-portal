export const BEGIN = 'BEGIN';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

interface IRAction<T> {
    type: string;
    payload?: T
}

interface IErrorResult {
    
}

export const dispatchAsync = <T>(type: string, action: () => Promise<T>) => {
    return (dispatch) => {
        dispatch(<IRAction<void>>{type: type + '_' + BEGIN});
        action().then(response => {
            dispatch(<IRAction<T>>{type: type + '_' + SUCCESS, payload: response});
        }).catch(error => {
            dispatch(<IRAction<IErrorResult>>{type: type + '_' + ERROR, payload: error});
        });
    }
}