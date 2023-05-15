import api from './api';

export const getHotels = async(token) => {
  const hotels = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const hotelsData = hotels.data;
  return hotelsData;
};

export const getHotelWithRooms = async(hotelId, token) => {
  const hotel = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const hotelData = hotel.data;
  return hotelData;
};
