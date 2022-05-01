import { render, screen } from '@testing-library/react';
import { getMockFilm } from '../../mocks/film';
import CardTabOverview from './card-tab-overview';

describe('Component: CardTabOverview', () => {
  const film = getMockFilm();

  it('should render correctly', () => {
    render(<CardTabOverview data={film} />);

    expect(screen.getByText(/10/i)).toBeInTheDocument();
    expect(screen.getByText(/Good/i)).toBeInTheDocument();
    expect(screen.getByText(/123456/i)).toBeInTheDocument();
    expect(screen.getByText(/Movie description/i)).toBeInTheDocument();
    expect(screen.getByText(/Spielberg/i)).toBeInTheDocument();
    expect(screen.getByText(/name1 name2 and other/i)).toBeInTheDocument();
  });
});
