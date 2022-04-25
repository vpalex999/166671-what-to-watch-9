import { render, screen } from '@testing-library/react';
import ButtonMore from './button-more';

describe('Component: ButtonMore', () => {

  const onShowMore = jest.fn();

  it('should render correctly', () => {
    render(<ButtonMore onShowMore={onShowMore}/>);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
});
