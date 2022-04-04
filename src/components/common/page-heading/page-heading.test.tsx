import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageHeading from './page-heading';

describe('Component: PageHeading', () => {
  it('should render PageHeading correctly', () => {
    const someText = 'PageHeading data';
    render(<PageHeading>{someText}</PageHeading>);

    expect(screen.getByText(`${someText}`)).toBeInTheDocument();
  });
});
