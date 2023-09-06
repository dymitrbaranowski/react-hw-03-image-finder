import PropTypes from 'prop-types';
import axios from 'axios';

export function fetchImagesWithQuery(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=38440528-27ad43a15fe64cab61d6047d1&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

// import axios from 'axios';

// axios.defaults.baseURL = `https://pixabay.com/api`;

// export const fetchImages = async (inputValue, pageNr) => {
//   const response = await axios.get(
//     `/?q=${inputValue}&page=${pageNr}&key=38440528-27ad43a15fe64cab61d6047d1&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
//   );
//   return response.data.hits.map(image => {
//     return {
//       id: image.id,
//       webformatURL: image.webformatURL,
//       largeImageURL: image.largeImageURL,
//       tags: image.tags,
//     };
//   });
// };
