import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setAuthorizationAction: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { setAuthorizationAction } = userProcess.actions;
