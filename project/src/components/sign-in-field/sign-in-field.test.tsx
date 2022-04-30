import { render, screen } from '@testing-library/react';
import SignInField from './sign-in-field';

describe('Component: SignInField', () => {
  it('should render correctly', () => {
    render(
      <SignInField>
        <div>Hello</div>
        <div>World</div>
      </SignInField>,
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
