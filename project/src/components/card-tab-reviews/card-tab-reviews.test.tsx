import { render, screen } from '@testing-library/react';
import CardTabReviews from './card-tab-reviews';
import { getMockReviews } from '../../mocks/review';

describe('Component: CardTabReviews', () => {
  const mockReviews = getMockReviews();

  it('should render correctly', () => {
    render(<CardTabReviews data={mockReviews} />);

    expect(screen.getAllByText(/some review text/i).length).toEqual(1);

  });
});
