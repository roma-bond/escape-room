import { MainLayout, PageTitle, PageSubtext } from '../common/common';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { mapData, pointCoords } from '../../const';

const Contacts = (): JSX.Element => {
  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  Санкт-Петербург,
                  <br />
                  Набережная реки Карповка, д 5
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="tel:8 (800) 333-55-99">
                  8 (800) 333-55-99
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="mailto:info@escape-room.ru">
                  info@escape-room.ru
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap>
              <S.ContactsMapImage
                src={contactsMap}
                alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
                width="649"
                height="336"
              />
              <YMaps>
                <Map defaultState={mapData} width="649px" height="336px">
                  <Placemark
                    geometry={pointCoords}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: 'img/map-marker.svg',
                      iconImageSize: [48, 62],
                      iconImageOffset: [-24, -31],
                    }}
                  />
                </Map>
              </YMaps>
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
};

export default Contacts;
