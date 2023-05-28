import styled from 'styled-components';
import { FaFileDownload } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import sign from '../../../assets/images/sign.png';
import { useEffect, useState } from 'react';
import { getEventInfo } from '../../../services/eventApi';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import useGetEnrollment from '../../../hooks/api/useGetEnrollment';

export default function Certificate() {
  const [startAt, setStartAt] = useState('');
  const [ticket, setTicket] = useState(null);
  const [eventName, setEventName] = useState('');
  const { userEnrollment } = useGetEnrollment();

  async function days() {
    try {
      const response = await getEventInfo();
      const { startsAt, endsAt, title } = response;
      const start = new Date(startsAt);
      const end = new Date(endsAt);
      const newStartAt = format(new Date(startsAt), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR });
      setStartAt(newStartAt);
      setTicket(response);
      setEventName(title);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    days();
  }, []);

  function generateImage() {
    const element = document.getElementById('certificate');

    html2canvas(element, {
      scale: 1,
      allowTaint: false,
      useCORS: true,
      backgroundColor: null,
      width: element.offsetWidth,
      height: element.offsetHeight,
      logging: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const img = new Image();
      img.src = imgData;
      document.body.appendChild(img);
      const newTab = window.open();
      newTab.document.body.innerHTML = `<img src="${imgData}"/>`;
      setTimeout(() => {
        newTab.print();
        newTab.close();
        img.remove();
      }, 500);
    });
  }

  return (
    <>
      <>
        {userEnrollment && (
          <Container>
            <Title>Certificado</Title>

            <CertificateImg id="certificate">
              <Content>
                <h1>CERTIFICADO</h1>
                <h2>DE PARTICIPAÇÃO</h2>
                <Text>Concedemos esse certificado a: </Text>
                <TitleName>{userEnrollment.name}</TitleName>
                <Text>pela participação no evento </Text>
                <ActivityName>{eventName}</ActivityName>
                <Text>na data de {startAt}. </Text>

                <WrapperAssets>
                  <img src={sign}></img>
                </WrapperAssets>
              </Content>
            </CertificateImg>
            <WrapperButton>
              <Button onClick={() => generateImage()}>
                <p>Baixar Certificado</p>
                <FaFileDownload size={24} />
              </Button>
            </WrapperButton>
          </Container>
        )}
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
`;

const Title = styled.div`
  font-family: 'Roboto';
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 10px;
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
const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`;

const Button = styled.button`
  width: 200px;
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

const CertificateImg = styled.div`
  background: radial-gradient(
    circle,
    rgba(255, 203, 0, 0.7525210767900911) 0%,
    rgba(255, 0, 131, 0.7217087518601191) 100%
  );
  width: 850px;
  height: 550px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
  h1 {
    font-weight: bold;
    font-size: 60px;
    margin-top: 10px;
  }
  h2 {
    font-weight: bold;
    font-size: 44px;
    margin-bottom: 30px;
  }
`;
const Content = styled.div`
  flex-direction: column;
  border: 2px solid #fff;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-top: 10px;
`;

const TitleName = styled.div`
  font-size: 40px;
`;

const ActivityName = styled.div`
  font-size: 30px;
  margin-top: 10px;
`;

const WrapperAssets = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  img {
    max-width: 500px;
  }
`;
