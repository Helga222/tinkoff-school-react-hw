import { combineReducers } from 'redux';

import { reducer as  accountReducer} from './accounts/reducer';
import { reducer as operationsReducer } from './operations/reducer';

export default combineReducers({
    accountReducer,
    operationsReducer,
});
