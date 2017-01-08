import { combineReducers } from 'redux';

import cabinet from 'modules/cabinet/reducers/reducer';
import roomsRibbon from 'modules/roomsRibbon/reducer';

var reducer = combineReducers({
    cabinet,
    roomsRibbon
});

export default reducer;