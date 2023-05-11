import { useState } from 'react';
import styled from 'styled-components';

export default function SelectBox({ text, textPrice, setSelected, setTicket }) {
  const option = text === 'Online' ? false : true;
  const [checkBox, setCheckBox] = useState(false);

  const handleClick = () => {
    setSelected({ option });
    setCheckBox(!checkBox);
    if (text === 'Online' || text === 'Com Hotel' || text === 'Sem Hotel') {
      setTicket(true);
    } else {
      setTicket(false);
    }
  };

  return (
    <Container checkBox={checkBox} onClick={handleClick}>
      <h2>{text}</h2>
      <h3>{textPrice}</h3>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 145px;
  height: 145px;
  background-color: ${(props) => (props.checkBox ? '#FFEED2' : '#ffffff')};
  border: 1px solid #cecece;
  border-radius: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  h2 {
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #454545;
  }
  h3 {
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #898989;
  }
`;
