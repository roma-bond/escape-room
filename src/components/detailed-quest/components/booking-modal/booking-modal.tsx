import { FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AppRoute } from '../../../../const';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { OrderPost } from '../../../../types/data';

interface BookingModalProps {
  peopleCount: number[];
  onModalClose: () => void;
}

const BookingModal = ({
  peopleCount,
  onModalClose,
}: BookingModalProps): JSX.Element => {
  const history = useHistory();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const peopleRef = useRef<HTMLInputElement>(null);
  const isValidRef = useRef<HTMLInputElement>(null);
  const [minPeopleCount, maxPeopleCount] = peopleCount;

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const order: OrderPost = {
      name: nameRef.current ? nameRef.current.value : '',
      peopleCount: peopleRef.current ? +peopleRef.current.value : 0,
      phone: phoneRef.current ? phoneRef.current.value : '1234567890',
      isLegal: isValidRef.current ? isValidRef.current.value === 'on' : false,
    };

    const sendOrder = () => {
      axios
        .post('http://localhost:3001/orders', order)
        .then((response) => {
          if (response.statusText === 'Created') {
            alert('Your order created');
            history.push(AppRoute.Root);
          }
        })
        .catch((error) => {
          alert(error.response.data.messages.join('. '));
        });
    };

    sendOrder();
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn data-testid="close" onClick={onModalClose}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm id="booking-form" onSubmit={formSubmitHandler}>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              data-testid="name"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              pattern="[0-9]{10}"
              data-testid="phone"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={peopleRef}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              min={minPeopleCount}
              max={maxPeopleCount}
              data-testid="people"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={isValidRef}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              data-testid="isValid"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
