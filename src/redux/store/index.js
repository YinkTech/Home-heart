import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from '../reducers/rootReducers'


const store = configureStore ({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;