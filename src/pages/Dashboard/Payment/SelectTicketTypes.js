import styled from 'styled-components';
import SelectBox from './SelectBox';
import { useState } from 'react';

export default function TicketTypes() {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Container>
        <h1>Primeiro, escolha sua modalidade de ingresso</h1>
        <Boxes>
          <SelectBox setSelected={setSelected} text={'Presencial'} textPrice={'R$250'} />
          {console.log(selected)}
          <SelectBox setSelected={setSelected} text={'Online'} textPrice={'R$100'} />
        </Boxes>
      </Container>
      {selected.option && (
        <Container>
          <h1>Ótimo! Agora escolha sua modalidade de hospedagem</h1>
          <Boxes>
            <SelectBox setSelected={setSelected} text={'Sem Hotel'} textPrice={'R$0'} />
            <SelectBox setSelected={setSelected} text={'Com Hotel'} textPrice={'R$350'} />
          </Boxes>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  > h1 {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    font-family: 'Roboto';
    font-size: 34px;
    font-size: 20px;
    line-height: 23px;

    color: #8e8e8e;
  }
`;

const Boxes = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 20px;
`;
