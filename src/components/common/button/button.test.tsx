import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './button';

describe('Component: Button', () => {
  it('should render Button correctly', () => {
    const someText = 'Click me';
    const someProps = { type: 'button' };
    const { container } = render(<Button {...someProps}>{someText}</Button>);

    expect(screen.getByText(`${someText}`)).toBeInTheDocument();
    expect(container.querySelector('button')?.getAttribute('type')).toBe(
      someProps.type,
    );
  });
});
