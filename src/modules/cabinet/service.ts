import {GET, POST} from 'helpers'

import {IBaseUser, IBase} from 'models';

const apiRoot = 'baseUser';

export const getBaseUserByUserId = (userId: string): Promise<IBaseUser> => {
    return GET(apiRoot + '/getBaseUserByUserId/' + userId);
}

export const getBaseUserById = (baseUserId: string): Promise<IBase> => {
    return GET(apiRoot + '/getBaseUserById/' + baseUserId);
}