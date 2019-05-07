import { Fragment } from 'react';
export default() => (
    <Fragment>
        <style>{`
            footer {
                width: 100%;
                padding: 40px;
                position: absolute;
                background: #A9EEC2;
                absolute: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            ul {
                margin: 0;
                padding: 0;
            }
        `}</style>
        <footer>
            <ul className="links">
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Facebook</li>
            </ul>
        </footer>
    </Fragment>
)
