import { createAction } from '@reduxjs/toolkit';
import { Action } from '../const';

export const changeGenreAction = createAction(
  Action.CHANGE_GENRE,
  (value: string) => ({ payload: value }),
);
