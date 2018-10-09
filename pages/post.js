import PostComponent from '../src/components/PostComponent';
import posts from '../posts/posts';
import { withRouter } from 'next/router';

const Post = withRouter(props => {
    let p = posts.posts.find(p => p.postId == props.router.query.id);
    return <PostComponent {...p} />
});

export default Post;