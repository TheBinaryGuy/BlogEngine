export default (props) => {
    return (
        <div>
            <div className="card">
                <div className="cardTitle">{props.title}</div>
                <div className="info">
                    <div className="author">{props.author}</div>
                    <div className="date">{props.date}</div>
                </div>
            </div>
            <style jsx>
            {`
                .card {
                    background-color: #474754;
                    width: calc(100% - 10px);
                    height: 200px;
                    margin: 5px;
                    cursor: pointer;
                    color: white;
                    padding: 15px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                }

                .cardTitle {
                    font-size: 2em;
                }

                .info {
                    display: flex;
                    margin-left: auto;
                    align-self: flex-end;
                }

                .author {
                    margin-right: 15px;
                }

                .author::after {
                    content: '|';
                    margin-left: 15px;
                }

                .author::before {
                    content: 'By: ';
                    margin-left: 15px;
                }
            `}
            </style>
        </div>
    );
};