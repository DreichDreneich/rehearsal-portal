import {GET, POST} from 'helpers';
import {
    IReduxAction,
    ICredentials,
    IRegisterViewModel,
    IUser
} from 'models';

const apiRoot = 'account/';

export const Register = (model: IRegisterViewModel): Promise<IUser> => {
    return POST(apiRoot + 'register', model);
}