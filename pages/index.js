import Link from 'next/link';
import posts from '../posts/posts';
import CardComponent from '../src/components/CardComponent';

const Index = () => (
    <div id="indexRoot">
        {
            posts.posts.map((p, i) => {
                return (
                    <Link key={i} href={`post?id=${p.postId}`}>
                        <div>
                            <CardComponent title={p.postTitle} author={p.authorName} date={p.postDate} />
                        </div>
                    </Link>
                );
            })
        }
        <style jsx global>
        {`
            * {
                font-family: Quicksand, sans-serif;
                box-sizing: content-box;
                -webkit-box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            
            body {
                height: 100%;
            }

            #__next {
                height: 100%;
            }
        `}
        </style>
    </div>
);
  
export default Index;