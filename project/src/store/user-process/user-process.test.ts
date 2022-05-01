import { AuthorizationStatus } from '../../const';
import { setAuthorizationAction, userProcess } from './user-process';

describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      authorizationStatus: AuthorizationStatus.Unknown,
    });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    expect(
      userProcess.reducer(
        state,
        setAuthorizationAction(AuthorizationStatus.Auth),
      ),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.Auth,
    });
  });

  it('should update authorizationStatus to "No_Auth"', () => {
    const state = { authorizationStatus: AuthorizationStatus.Auth };

    expect(
      userProcess.reducer(
        state,
        setAuthorizationAction(AuthorizationStatus.NoAuth),
      ),
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
    });
  });
});
