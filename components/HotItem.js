import { Fragment } from 'react';
export default() => (
    <Fragment>
        <style>{`
            #hot-item {
                width: 100%;
                height: 100%;
                background: #FFFFFF;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            img, h1 {
                margin: auto;
            }
            h1 {
                font-size: 4em;
                color: #FF9E9E;
                max-width: 32%;
                display: inline-block;
            }
        `}</style>
        <section id="hot-item">
            <img src="/static/hot.png" alt="Hot image picture" />
            <h1>HOT ITEM</h1>
        </section>
    </Fragment>
)
