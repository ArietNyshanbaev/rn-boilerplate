import postReducer, { fetchPost } from './ducks';

import Home from './Home';
import { connect } from 'react-redux';

export { postReducer };


const mapDispatchToProps = {
    fetchPosts: fetchPost,
};

const mapStateToProps = (state) => ({
    posts: state.posts
});

export default connect(mapStateToProps, mapDispatchToProps)((Home));
