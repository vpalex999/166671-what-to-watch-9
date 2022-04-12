import { ALL_GENRES } from '../../const';
import {
  changeGenreAction,
  clientProcess,
  setErrorAction,
} from './client-process';

describe('Reducer: clientProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(clientProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      filterGenre: ALL_GENRES,
      filmCountPerStep: 8,
      error: '',
    });
  });

  it('should update Genre', () => {
    const state = {
      filterGenre: ALL_GENRES,
      filmCountPerStep: 8,
      error: '',
    };

    expect(clientProcess.reducer(state, changeGenreAction('Comedy'))).toEqual({
      filterGenre: 'Comedy',
      filmCountPerStep: 8,
      error: '',
    });
  });

  it('should update error message', () => {
    const state = {
      filterGenre: ALL_GENRES,
      filmCountPerStep: 8,
      error: '',
    };

    expect(clientProcess.reducer(state, setErrorAction('Some error'))).toEqual({
      filterGenre: ALL_GENRES,
      filmCountPerStep: 8,
      error: 'Some error',
    });
  });
});
