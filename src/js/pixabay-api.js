import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56899501-989548285d21a3ed69d029560';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}