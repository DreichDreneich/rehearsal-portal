import {GET, POST} from 'helpers';
import {
    IReduxAction,
    ICredentials,
    IRegisterViewModel,
    IUser
} from 'models';

const apiRoot = 'account';

export const Register = (model: IRegisterViewModel): Promise<IUser> => {
    return POST(apiRoot + '/register', model);
}

export const Login = (model: {loginObject: string, password: string}): Promise<IUser> => {
    return POST(apiRoot + '/login', model);
}

export const Logout = (): Promise<void> => {
    return POST(apiRoot + '/logout');
}