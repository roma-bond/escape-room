import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render Footer correctly', () => {
    render(<Footer />);

    expect(screen.getByText(/Инстаграм/i)).toBeInTheDocument();
    expect(screen.getByText(/Вконтакте/i)).toBeInTheDocument();
  });
});
