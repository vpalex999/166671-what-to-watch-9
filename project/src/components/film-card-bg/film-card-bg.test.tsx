import { render, screen } from '@testing-library/react';
import FilmCardBg from './film-card-bg';

describe('Component: FilmCardBg', () => {
  it('should render correctly', () => {
    const bg = 'backgroung.png';
    const alt = 'some alt text';

    render(<FilmCardBg background={bg} alt={alt} />);

    expect(screen.getByAltText(alt)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', bg);
  });
});
