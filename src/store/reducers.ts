import { combineReducers } from 'redux';

import cabinet from 'modules/cabinet/reducers/reducer';

var reducer = combineReducers({
    cabinet
});

export default reducer;