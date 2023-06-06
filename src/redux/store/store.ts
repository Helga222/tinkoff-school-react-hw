import { configureStore } from '@reduxjs/toolkit'
import {reducer as accountReducer} from '../accounts/reducer'
import { reducer as operationsReducer } from '../operations/reducer';


const store = configureStore({
  reducer:{
    accounts: accountReducer,
    operations: operationsReducer,
  }
});

export default store;