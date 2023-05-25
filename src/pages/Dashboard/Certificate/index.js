import styled from 'styled-components';
import { FaFileDownload } from 'react-icons/fa';

export default function Certificate() {
  return (
    <>
      <>
        <Container>
          <Title>Certificados</Title>
          <Subtitle>Aqui estão seus certificados, clique para fazer o download</Subtitle>

          <Button>
            {' '}
            <p>Certificado: Debate sobre Ética na Tecnologia</p>
            <FaFileDownload size={22} />
          </Button>
        </Container>
      </>
      {/* <>
      //verificar atividade
        <Container>
          <Title>Certificados</Title>
          <Notice>
            <p>Você precisa concluir uma atividade primeiro para obter seu certificado</p>
          </Notice>
        </Container>
      </> */}
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  > h1 {
    font-family: 'Roboto';
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-family: 'Roboto';
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 40px;
`;

const Notice = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 34px;
  }
  p {
    height: 46px;
    width: 470px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: #8e8e8e;
  }
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #8e8e8e;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 700px;
  height: 50px;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 15px;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
  p {
    font-size: 16px;
  }
`;
