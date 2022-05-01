import { render, screen } from '@testing-library/react';
import { getMockReview } from '../../mocks/review';
import Review from './review';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const mockReview = getMockReview();

    render(<Review review={mockReview} />);

    expect(screen.getByText(mockReview.text)).toBeInTheDocument();
    expect(screen.getByText(mockReview.author)).toBeInTheDocument();
    expect(screen.getByText(mockReview.dateTime)).toBeInTheDocument();
    expect(screen.getByText(mockReview.displayDate)).toBeInTheDocument();
    expect(screen.getByText(mockReview.rating)).toBeInTheDocument();
  });
});
