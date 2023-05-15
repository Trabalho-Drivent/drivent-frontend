import * as ticketApi from '../../services/ticketApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useTicket() {
  const token = useToken();
  try {
    const { data: ticket } = useAsync(() => ticketApi.getTicket(token));
    return { ticket };
  } catch (error) {
    console.log(error);
    return {};
  }
}
