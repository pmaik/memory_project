import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators: are functions that returns actions.
// Fetching all data is asynchronous action hence we use Redux-Thunk.
// Redux-thunk allow us to add additional arrow function : async(dispatch). 
export const getPosts = () => async (dispatch) => {
    
    try {
        // fetching all data from api.
        const { data } = await api.fetchPosts();

        dispatch( { type: FETCH_ALL, payload: data} );

    } catch (error) {
        console.log(error);
    }
} 

export const createPost = (post) => async (dispatch) => {
    try {
        // making post api request to our backend server and sending post.
        const {data} = await api.createPost(post);

        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data});
    } catch (error) {
        console.log(error);
    }
}