import mockPosts from './mockData';

// =================== TYPES ================== 
const FETCH_POSTS = 'FETCH_POSTS';


// =================== ACTIONS ================

const fetchPostAction = (data) => {
    return {
        type: FETCH_POSTS,
        payload: data
    };
}

export const fetchPost = () => (dispatch) => {
    dispatch(fetchPostAction(mockPosts));
};

// =================== REDUCER ================

export default function (state = [], action) {
    switch (action.type) {
    case FETCH_POSTS:
        return action.payload;
    default:
        return state;
    }
}
