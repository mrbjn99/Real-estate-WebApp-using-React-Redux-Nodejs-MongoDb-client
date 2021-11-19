import axios from 'axios';

const URL = 'https://real-estate-app-3.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/posts`);