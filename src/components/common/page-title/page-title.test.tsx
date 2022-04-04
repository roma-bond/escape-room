import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageTitle from './page-title';

describe('Component: PageTitle', () => {
  it('should render PageTitle correctly', () => {
    const someText = 'PageTitle data';
    render(<PageTitle>{someText}</PageTitle>);

    expect(screen.getByText(`${someText}`)).toBeInTheDocument();
  });
});
