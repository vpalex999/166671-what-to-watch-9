import { render, screen } from '@testing-library/react';
import { getMockFilm } from '../../mocks/film';
import CardTabDetails from './card-tab-details';

describe('Component: CardTabDetails', () => {
  const film = getMockFilm();

  it('should render correctly', () => {
    render(<CardTabDetails data={film} />);

    expect(screen.getByText(/Spielberg/i)).toBeInTheDocument();
    expect(screen.getByText(/name1/i)).toBeInTheDocument();
    expect(screen.getByText(/name2/i)).toBeInTheDocument();
    expect(screen.getByText(/112/i)).toBeInTheDocument();
    expect(screen.getByText(/Comedy/i)).toBeInTheDocument();
    expect(screen.getByText(/2019/i)).toBeInTheDocument();
  });
});
