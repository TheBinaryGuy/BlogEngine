import Link from 'next/link';
import posts from '../posts/posts';

const Index = () => (
    <div id="indexRoot">
        {
            posts.posts.map((p, i) => {
                return (
                    <Link key={i} href={`post?id=${p.postId}`}>
                        <a>{p.postTitle}</a>
                    </Link>
                );
            })
        }
        <p>Hello Next.js</p>
        <style jsx global>
        {`
            * {
                font-family: Quicksand, sans-serif;
                box-sizing: content-box;
            }
        
            html, body {
                margin: 0;
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