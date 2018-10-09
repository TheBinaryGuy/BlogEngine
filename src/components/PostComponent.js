export default (props) => {
    let content = { __html: props.content() };
    return (
        <div id="postRoot">
            <div className="nav-bar">
                <div className="title">{props.postTitle}</div>
                <div className="blogDate">
                    {props.postDay} {props.postDate} - <strong>{props.postTime}</strong>
                </div>
                <div className="close">
                    <img className="close-icon" src="../static/img/Close-Icon.png" alt="close-icon" />
                </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={content}></div>
            <div className="footerNav">
                    <div className="author">
                        <figure className="author-info">
                            <img src={props.authorAvatarLocation} alt="Author Image" className="avatar" />
                            <figcaption className="username">{props.authorName}</figcaption>
                        </figure>
                    </div>
                    <div>
                        <img className="share-icon" src="../static/img/Share.png" alt="share-icon" />
                    </div>
                    <div>
                        <img className="thumbs-up-icon" src="../static/img/ThumbsUp.png" alt="thumbs-up-icon" />
                    </div>
                    <div className="pc-close">
                        <img className="close-icon" src="../static/img/Close-Icon.png" alt="close-icon" />
                    </div>
            </div>
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
                
                #postRoot {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    justify-content: center;
                    align-items: center;
                }
                
                .nav-bar {
                    background-color: #474754;
                    height: 50px;
                    width: 100%;
                    color: white;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    font-size: 20px;
                }
                
                .nav-bar div:not(:first-child) {
                    margin-right: 20px;
                }
                
                .nav-bar div:first-child {
                    margin-left: 20px;
                    margin-right: auto;
                }
                
                .close-icon {
                    width: 17px;
                    height: 17px;
                }
                
                .content {
                    background-color: #fff;
                    font-size: 16px;
                    overflow-y: scroll;
                    height: 100%;
                    width: 100%;
                }
                
                .content div * {
                    margin: 20px;
                }
                
                .firstPara::first-letter {
                    font-size: 32px;
                }
                
                .footerNav {
                    height: 50px;
                    background-color: #474754;
                    width: 100%;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                }
                
                .footerNav div:not(:first-child) {
                    margin-right: 20px;
                    margin-top: 5px;
                }
                
                .footerNav div:first-child {
                    margin-left: 20px;
                    margin-right: auto;
                }
                
                .share-icon {
                    width: 24px;
                    height: 24px;
                }
                
                .thumbs-up-icon {
                    width: 24px;
                    height: 24px;
                }
                
                figure {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                }
                
                .avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16);
                    /* filter: drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.16)); */
                }
                
                .username {
                    font-size: 20px;
                    margin-left: 10px;
                }
                
                .pc-close {
                    display: none;
                }
                
                .blogDate {
                    display: none;
                }
                
                @media (min-width: 768px) {
                    .content {
                        font-size: 20px;
                    }
                
                    .firstPara::first-letter {
                        font-size: 36px;
                    }
                }
                
                @media (min-width: 1280px) {
                    #postRoot {
                        display: grid;
                        grid-template-areas: 
                            'header content'
                            'footer content';
                        height: 100%;
                    }
                
                    .nav-bar {
                        grid-area: header;
                        width: 400px;
                        height: 80vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                    }
                
                    .title {
                        font-size: 32px;
                        margin-top: 20px;
                        margin-left: 20px;
                    }
                
                    .blogDate {
                        display: block;
                        font-weight: lighter;
                        margin-top: 10px;
                        margin-left: 20px;
                    }
                    
                    .close {
                        display: none;
                    }
                
                    .content {
                        grid-area: content;
                        font-size: 20px;
                        width: calc(100vw - 400px);
                        height: 100vh;
                    }
                
                    .content div * {
                        margin: 20px;
                    }
                
                    .firstPara::first-letter {
                        font-size: 36px;
                    }
                
                    .pc-close {
                        display: block;
                    }
                
                    .footerNav {
                        grid-area: footer;
                        width: 400px;
                        height: 20vh;
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                    }
                
                    .footerNav div {
                        margin-bottom: 20px;
                    }
                
                    .footerNav div:first-child {
                        margin-left: 20px;
                    }
                
                    .footerNav div:not(:first-child) {
                        margin-right: 20px;
                    }
                
                    .footerNav div:last-child, .footerNav div:first-child {
                        margin-bottom: 23px;
                    }
                }
            `}
            </style>
        </div>
    );
};