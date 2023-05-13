import { useState } from 'react';
import Warning from '../../../layouts/Warning';
import styled from 'styled-components';
import HotelInfo from '../../../components/HotelInfo';
import { IoPersonOutline } from 'react-icons/io5';

export default function Hotel() {
  const [showHotels, setShowHotels] = useState(true);
  const [showRooms, setShowRooms] = useState(true);

  return (
    <>
      {showHotels &&
        <Container>
          <Title>Escolha de Hotel e Quarto</Title>
          <Subtitle>Primeiro, escolha seu hotel</Subtitle>

          <Hotels>
            <HotelInfo
              urlImage="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1"
              hotelName="Driven Resort"
              hotelType="Single e Double"
              hotelCapacity="103"
            />
            <HotelInfo
              urlImage="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?pid=ImgDet&rs=1"
              hotelName="Driven Resort"
              hotelType="Single e Double"
              hotelCapacity="103"
            />
          </Hotels>
          {showRooms &&
            <RoomsArea>
              <Subtitle2>Ótima pedida! Agora escolha seu quarto:</Subtitle2>
              <Rooms>
                <Room>
                  <div className="roomNumber">100</div>
                  <div className="roomPeople">
                    <IoPersonOutline className='icon' />
                    <IoPersonOutline className='icon' />
                  </div>
                </Room>
                <Room>
                  <div className="roomNumber">100</div>
                  <div className="roomPeople">
                    <IoPersonOutline className='icon' />
                    <IoPersonOutline className='icon' />
                  </div>
                </Room>

              </Rooms>
              <Button>RESERVAR QUARTO</Button>
            </RoomsArea>
          }
        </Container>

      }
      {!showHotels &&
        <Warning>
          <p>Sua modalidade de ingresso não inclui hospedagem Prossiga para escolha de atividades</p>
        </Warning>
      }
    </>
  );
};

const Container = styled.div`
  margin: 35px;
`;

const Title = styled.div`
  font-size: 34px;
  margin-bottom: 35px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #8E8E8E;
  margin-bottom: 20px;
`;

const Subtitle2 = styled.div`
  font-size: 20px;
  color: #8E8E8E;
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
  padding: 11px 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #CECECE;
  border-radius: 10px;
  
  &:hover{
    background-color: #FFEED2;
    cursor: pointer;
  }

  .roomNumber{
    font-size: 20px;
    color: #454545;
    font-weight: bold;
    margin-right: 75px;
  }
  .roomPeople{
    display: flex;
  }
  .icon{
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
  background-color: #E0E0E0;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
`;
