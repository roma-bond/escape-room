import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import BookingModal from './booking-modal';

const history = createMemoryHistory();

describe('Component: BookingModal', () => {
  it('should render BookingModal correctly', () => {
    const closeHandler = jest.fn();
    render(
      <Router history={history}>
        <BookingModal peopleCount={[3, 5]} onModalClose={closeHandler} />
      </Router>,
    );

    expect(
      screen.getByText(
        'правилами обработки персональных данных и пользовательским соглашением',
      ),
    ).toBeInTheDocument();
    const btn = screen.getByTestId('close');
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(closeHandler.call.length).toBe(1);
  });
});
