import axios from 'axios';
import history from '../history';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export const fetchPosts = () => async (dispatch) => {
  const request = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

  dispatch({
    type: FETCH_POSTS,
    payload: request.data,
  });
};

export const createPost = (value) => async (dispatch) => {
  // This function serves only the porpoise of documenting how to redirect
  // to a different page based on the request status
  try {
    const request = await axios.post(`${ROOT_URL}/posts${API_KEY}`, value);

    dispatch({
      type: CREATE_POST,
      payload: request.data,
    });
    history.push('/');
  } catch (error) {
    history.push('/');
  }
};

export const fetchPost = (id) => async (dispatch) => {
  const request = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  dispatch({
    type: FETCH_POST,
    payload: request.data,
  });
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  dispatch({
    type: DELETE_POST,
    payload: id,
  });

  history.push('/');
};
