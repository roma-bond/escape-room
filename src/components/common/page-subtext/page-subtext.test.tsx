import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageSubtext from './page-subtext';

describe('Component: PageSubtext', () => {
  it('should render PageSubtext correctly', () => {
    const someText = 'PageSubtext data';
    render(<PageSubtext>{someText}</PageSubtext>);

    expect(screen.getByText(`${someText}`)).toBeInTheDocument();
  });
});
