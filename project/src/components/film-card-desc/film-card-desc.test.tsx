import { render, screen } from '@testing-library/react';
import { getMockFilm } from '../../mocks/film';
import FilmCardDesc from './film-card-desc';


describe('Component: FilmCardDesc', () => {
  const film = getMockFilm();

  it('should render correctly without children', () =>{
    render(<FilmCardDesc data={film}/>);

    expect(screen.getByText(film.title)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
    expect(screen.queryByText('Children')).not.toBeInTheDocument();
  });

  it('should render correctly with children', () => {
    const children = (<h1>Children</h1>);

    render(<FilmCardDesc data={film}>{children}</FilmCardDesc>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
