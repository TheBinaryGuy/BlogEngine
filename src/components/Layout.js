import Head from 'next/head';

export default (props) => {
    return (
        <div>
            <Head>
                <meta property="og:title" content="TheBinaryBlog" />
                <meta property="og:description" content="A blog for those who can count from 0 to 1" />
                <meta property="og:url" content="https://blogengine.thebinaryguy.me/" />
                <meta name="Description" content="A blog for those who can only count from 0 to 1" />
                <meta name="Author" content="TheBinaryGuy" />
                <meta charset="utf-8" />
                <meta name="Robots" content="index, follow" />
                <title>Blog Engine</title>

            </Head>
            {props.children}
        </div>
    );
};