import PostComponent from '../src/components/PostComponent';
import posts from '../posts/posts';
import { withRouter } from 'next/router';
import Layout from '../src/components/Layout';

const Post = withRouter(props => {
    let p = posts.posts.find(p => p.postId == props.router.query.id);
    return (
        <Layout>
            <PostComponent {...p} />
        </Layout>
    );
});

export default Post;