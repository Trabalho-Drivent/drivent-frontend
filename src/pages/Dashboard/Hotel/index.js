import { useEffect, useState } from 'react';
import Warning from '../../../layouts/Warning';
import useEnrollment from '../../../hooks/api/useEnrollment';
import styled from 'styled-components';
import HotelInfo from '../../../components/Hotel';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';
import useTicket from '../../../hooks/api/useTicket';
import { getHotels, getHotelWithRooms } from '../../../services/hotelApi';
import useToken from '../../../hooks/useToken';

export default function Hotel() {
  const token = useToken();
  const { ticket } = useTicket();
  const [showHotels, setShowHotels] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [hotelSelected, setHotelSelected] = useState({});
  const [roomSelected, setRoomSelected] = useState({});

  useEffect(async() => {
    try {
      let hotels = await getHotels(token);
      setHotels(hotels);
      setShowHotels(true);
    } catch (error) {
      console.log('Error: Get hotels');
    }
  }, []);

  const handleSelectHotel = async(hotelId) => {
    if (hotelSelected?.id === hotelId) return setHotelSelected({});

    setRoomSelected({});

    try {
      let hotelWithRoomsData = await getHotelWithRooms(hotelId, token);
      setHotelSelected(hotelWithRoomsData);
    } catch (error) {
      console.log('Error: Get hotels with rooms');
    }
  };

  const handleSelectRoom = (room) => {
    if (roomSelected?.id === room.id) return setRoomSelected({});
    if (room.available > 0) setRoomSelected(room);
  };

  return (
    <>
      {!ticket && (
        <>
          <Container>
            <Title>Escolha de Hotel e Quarto </Title>
            <Warning>
              <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
            </Warning>
          </Container>
        </>
      )}
      {ticket && ticket.status !== 'PAID' && (
        <>
          <Container>
            <Title>Escolha de Hotel e Quarto </Title>
            <Warning>
              <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
            </Warning>
          </Container>
        </>
      )}
      {ticket && !ticket.TicketType.includesHotel && (
        <>
          <Container>
            <Title>Escolha de Hotel e Quarto </Title>
            <Warning>
              <p>Sua modalidade de ingresso não inclui hospedagem Prossiga para escolha de atividades</p>
            </Warning>
          </Container>
        </>
      )}
      {ticket && ticket.TicketType.includesHotel && showHotels && (
        <Container>
          <Title>Escolha de Hotel e Quarto</Title>
          <Subtitle>Primeiro, escolha seu hotel</Subtitle>

          <Hotels>
            {hotels.map((hotel, index) => (
              <HotelInfo
                handleSelectHotel={handleSelectHotel}
                key={index}
                selected={hotel.id === hotelSelected?.id}
                id={hotel.id}
                urlImage={hotel.image}
                hotelName={hotel.name}
                hotelType={hotel.types}
                hotelCapacity={hotel.totalAvailableRooms}
              />
            ))}
          </Hotels>
          {hotelSelected?.Rooms?.length > 0 && (
            <RoomsArea>
              <Subtitle2>Ótima pedida! Agora escolha seu quarto:</Subtitle2>

              <Rooms>
                {hotelSelected?.Rooms?.map((room, index) => (
                  <Room
                    selected={room.id === roomSelected?.id}
                    key={index}
                    color={room.available === 0 ? '#E9E9E9' : '#FFFFFF'}
                    onClick={() => handleSelectRoom(room)}
                  >
                    <div className="roomNumber">{room.name}</div>
                    <div className="roomPeople">
                      {roomSelected?.id === room.id && (
                        <>
                          {Array(room.available - 1)
                            .fill(0)
                            .map((value, index) => (
                              <IoPersonOutline key={index} className="icon" />
                            ))}
                          <IoPerson key={index} className="icon pink" />
                        </>
                      )}
                      {roomSelected?.id !== room.id && (
                        <>
                          {Array(room.available)
                            .fill(0)
                            .map((value, index) => (
                              <IoPersonOutline key={index} className="icon" />
                            ))}
                        </>
                      )}
                      {Array(room.capacity - room.available)
                        .fill(0)
                        .map((value, index) => (
                          <IoPerson key={index} className="icon" />
                        ))}
                    </div>
                  </Room>
                ))}
              </Rooms>
              {roomSelected?.id && <Button>RESERVAR QUARTO</Button>}
            </RoomsArea>
          )}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  margin: 35px;
`;

const Title = styled.div`
  font-size: 34px;
  margin-bottom: 35px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #8e8e8e;
  margin-bottom: 20px;
`;

const Subtitle2 = styled.div`
  font-size: 20px;
  color: #8e8e8e;
  margin-bottom: 20px;
  margin-top: 45px;
  margin-bottom: 15px;
`;

const Hotels = styled.div`
  display: flex;
  overflow-x: hidden;
`;

const RoomsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const Rooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Room = styled.div`
  width: 220px;
  height: 45px;
  padding: 11px 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #cecece;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : props.color)};

  &:hover {
    background-color: #ffeed2;
    cursor: pointer;
  }

  .roomNumber {
    font-size: 20px;
    color: #454545;
    font-weight: bold;
    margin-right: 75px;
  }
  .roomPeople {
    display: flex;
  }
  .pink {
    color: #ff4791;
  }
  .icon {
    height: 25px;
    width: 25px;
    margin-left: 3px;
  }
`;

const Button = styled.button`
  border: 0;
  margin-top: 20px;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 37px;
  background-color: #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #ffeed2;
    cursor: pointer;
  }
`;
