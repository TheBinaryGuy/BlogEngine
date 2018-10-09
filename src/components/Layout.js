import Head from 'next/head';

export default (props) => {
    return (
        <div>
            <Head>
                <title>TheBinaryBlog</title>
                <meta name="description" content="A blog for those who can only count from 0 to 1" />

                <meta itemprop="name" content="TheBinaryBlog" />
                <meta itemprop="description" content="A blog for those who can only count from 0 to 1" />
                <meta itemprop="image" content="https://i.imgur.com/u6fGNkM.jpg" />

                <meta property="og:url" content="https://blogengine.thebinaryguy.me" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TheBinaryBlog" />
                <meta property="og:description" content="A blog for those who can only count from 0 to 1" />
                <meta property="og:image" content="https://i.imgur.com/u6fGNkM.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TheBinaryBlog" />
                <meta name="twitter:description" content="A blog for those who can only count from 0 to 1" />
                <meta name="twitter:image" content="https://i.imgur.com/u6fGNkM.jpg" />

            </Head>
            {props.children}
        </div>
    );
};