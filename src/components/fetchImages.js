import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30324791-b9ee8b8f80ba846b47d2b7bc7';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
console.log(fetchImages);