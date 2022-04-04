import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Container from './container';

describe('Component: Container', () => {
  it('should render Container correctly', () => {
    const someText = 'Container data';
    render(<Container>{someText}</Container>);

    expect(screen.getByText(`${someText}`)).toBeInTheDocument();
  });
});
