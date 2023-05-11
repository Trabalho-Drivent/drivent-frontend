import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import format from './format';

export default function FormCard() {
  const [focus, setFocus] = useState('');
  const [form, setForm] = useState({
    name: '',
    cvc: '',
    expiry: '',
    number: '',
  });

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    let formattedValue = value;
    switch (name) {
    case 'number':
      formattedValue = format.formatCardNumber(value);
      break;
    case 'expiry':
      formattedValue = format.formatCardExpiry(value);
      break;
    case 'cvc':
      formattedValue = format.formatCardCvc(value);
      break;
    default:
      break;
    }
    setForm({ ...form, [name]: formattedValue });
  }

  return (
    <Section>
      <CardsContainer>
        <Cards cvc={form.cvc} expiry={form.expiry} focused={focus} name={form.name} number={form.number} />
      </CardsContainer>
      <Container>
        <input type="tel" name="number" onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Card Number" value={(form.number).replace(/(\d{4})(?=\d)/g, '$1-')} />
        <span>E.g.: 49..., 51..., 36..., 37...</span>
        <input type="text" name="name" onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Name" value={form.name} />
        <div>
          <input type="tel" name="expiry" onChange={handleInputChange} onFocus={handleInputFocus} placeholder="Valid Thru" value={form.expiry} />
          <input type="tel" name="cvc" onChange={handleInputChange} onFocus={handleInputFocus} placeholder="CVC" value={form.cvc} />
        </div>
      </Container>
    </Section>
  );
}

const Container = styled.form`
  max-width: 380px;
  width: 100%;
  > input,
  div > input {
    width: 100%;
    height: 45px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1.8px solid #8e8e8e;
    outline: none;
    font-size: 17px;
  }
  > span {
    font-family: 'Roboto';
    font-size: 16px;
    color: #8e8e8e;
  }
  > :nth-child(1) {
    margin-bottom: 5px;
  }
  > :nth-child(3) {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    > :nth-child(1) {
      width: 55%;
    }
    > :nth-child(2) {
      width: 40%;
    }
  }

  @media(max-width: 900px){
    margin-bottom: 30px;
  }
`;

const Section = styled.section`
  max-width: 706px;
  display: flex;
  

  @media(max-width: 900px){
    flex-direction: column;
    gap: 20px;
  }
`;

const CardsContainer = styled.div`
  margin-right: auto;
`;
