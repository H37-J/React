import {create}import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_POSTS,
    LIST_POSTS_SUCCESS,
    LIST_POST_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');

export const listPosts=createAction(
    LIST_POSTS,
    ({tag,username,page})=>({tag,username,page}),
);

const listPostSaga=createRequestSaga(LIST_POSTS,postsAPI.listPosts);
export function* postSaga(){
    yield takeLatest(LIST_POSTS,listPostSaga);
}

const initialState={
    posts:null,
    error:null,
    lastPage:1,
};

const posts=handelActions(
    {
        [LIST_POSTS_SUCCESS]:(state,{payload:posts,meta:response})=>({
            ...state,
            posts,
           
        }),
        [LIST_POSTS_FAILURE]:(state,{payload:errer})=>({
            ...state,
            error,
        }),
    },
    initialState,
);

export default posts;