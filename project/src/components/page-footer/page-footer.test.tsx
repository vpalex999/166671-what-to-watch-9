import { render, screen } from '@testing-library/react';
import Footer from './page-footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(<Footer ><div>Hello Footer</div></Footer>);

    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
    expect(screen.getByText('Hello Footer')).toBeInTheDocument();
  });
});
