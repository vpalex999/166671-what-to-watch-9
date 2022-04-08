import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { clientData } from './client-data/client-data';
import { clientProcess } from './client-process/client-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.data]: clientData.reducer,
  [NameSpace.client]: clientProcess.reducer,
});
