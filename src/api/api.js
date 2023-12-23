import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40601528-eb3806a59487c1013e43987dd',
    image_type: 'photo',
  },
});

export const getImages = async (searchName, page, per_page) => {
  const params = { q: searchName, page, per_page };

  const { response } = await instance.get('', { params });
  return response;
};
