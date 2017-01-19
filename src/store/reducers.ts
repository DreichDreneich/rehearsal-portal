import { combineReducers } from 'redux';

import cabinet from 'modules/cabinet/reducers/reducer';
import roomsRibbon from 'modules/roomsRibbon/reducer';
import user from 'modules/authentication/reducer';

var reducer = combineReducers({
    cabinet,
    roomsRibbon,
    user
});

export default reducer;