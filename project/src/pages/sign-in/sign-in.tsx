import { FormEvent, useRef, useState } from 'react';
import LogoLight from '../../components/logo-light/logo-light';
import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import SignInField from '../../components/sign-in-field/sign-in-field';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';

function SignInPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const [isValidEmail, setIsValidEmail] = useState(true);

  const onSubmit = (authData: AuthData): void => {
    dispatch(loginAction(authData));
  };

  const onLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (loginRef.current.value.length === 0) {
        setIsValidEmail(false);
      } else {
        onSubmit({
          email: loginRef.current.value,
          password: passwordRef.current.value,
        });
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onLogin}>
          {!isValidEmail && (
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          )}

          <div className="sign-in__fields">
            <SignInField
              className={isValidEmail ? '' : 'sign-in__field--error'}
            >
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </SignInField>
            <SignInField>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </SignInField>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer>
        <LogoLight />
      </Footer>
    </div>
  );
}

export default SignInPage;
