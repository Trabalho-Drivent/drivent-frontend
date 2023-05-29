import api from './api';

export const getUserActivities = async(token) => {
  const userActivities = await api.get('/activities/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return userActivities.data;
};

export const addUserActivities = async(token, activityId) => {
  const userActivity = await api.post(`/activities/${activityId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return userActivity.data;
};

export const activitiesFilter = async(token, formattedDate) => {
  const activitiesFilter = await api.get(`/activities/${formattedDate}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return activitiesFilter.data;
};
