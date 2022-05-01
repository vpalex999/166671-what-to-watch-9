import { render, screen } from '@testing-library/react';
import FilmCardPosterBig from './film-card-poster-big';


describe('Component: FilmCardPosterBig', () => {
  it('should render correctly', () => {
    const props = {
      poster: 'poster.png',
      alt: 'alt text',
    };

    render(<FilmCardPosterBig {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', props.poster);
    expect(screen.getByAltText(props.alt)).toBeInTheDocument();
  });
});
