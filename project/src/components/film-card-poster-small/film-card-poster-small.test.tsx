import { render, screen } from '@testing-library/react';
import FilmCardPosterSmall from './film-card-poster-small';


describe('Component: FilmCardPosterBig', () => {
  it('should render correctly', () => {
    const props = {
      poster: 'poster.png',
      alt: 'alt text',
    };

    render(<FilmCardPosterSmall {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', props.poster);
    expect(screen.getByAltText(props.alt)).toBeInTheDocument();
  });
});
