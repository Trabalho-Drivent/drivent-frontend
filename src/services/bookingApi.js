import api from './api';

export const getBooking = async(token) => {
  const booking = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return booking.data;
};

export const addBooking = async(token, roomId) => {
  const booking = await api.post('/booking', { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return booking.data;
};

export const changeBooking = async(token, bookingId, roomId) => {
  const booking = await api.put(`/booking/${bookingId}`, { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return booking.data;
};
