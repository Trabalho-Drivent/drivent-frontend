import styled from 'styled-components';

export default function HotelInfo({ handleSelectHotel, id, selected, urlImage, hotelName, hotelType, hotelCapacity }) {
  return (
    <Container selected={selected} onClick={() => handleSelectHotel(id)}>
      <Image src={urlImage}>

      </Image>

      <Title>{hotelName}</Title>

      <Subtitle>Tipos de acomodação:</Subtitle>
      <Description>{hotelType}</Description>

      <Subtitle>Vagas disponíveis:</Subtitle>
      <Description>{hotelCapacity}</Description>
    </Container>
  );
};

const Container = styled.div`
  min-width: 196px;
  padding: 16px;
  background-color: ${props => props.selected ? '#FFEED2' : '#EBEBEB'} ;
  border-radius: 10px;
  margin-right: 20px;
  cursor: pointer;
  &:hover{
    background-color: #FFEED2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.div`
margin-top: 10px;
  font-size: 20px;
  color: #343434;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #3C3C3C;
  font-weight: bold;
  margin-top: 14px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #3C3C3C;
`;

