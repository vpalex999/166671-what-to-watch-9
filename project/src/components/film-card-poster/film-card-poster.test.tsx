import { render, screen } from '@testing-library/react';
import FilmCardPoster from './film-card-poster';

describe('Component: FilmCardPoster', () => {
  it('should render correctly', () => {
    const props = {
      poster: 'poster.png',
      alt: 'alt text',
      className: undefined,
    };

    render(<FilmCardPoster {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', props.poster);
    expect(screen.getByAltText(props.alt)).toBeInTheDocument();
  });

});
