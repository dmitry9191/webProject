import React from 'react';
import './classicWeb.css';

const ClassicWeb = () => {
    return (
        <body>
            <section className="promo">
                <div className="container">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + '/img/icons/logo.png'} alt="logo" className="logo_img"/>
                        <div class="logo_text">Wordpress интенсив</div>
                        <h1 className="title">Создать свой сайт на Wordpress</h1>
                        <div className="simple">
                            <h2 className="title_big">это просто!</h2>
                            <div className="line"></div>
                        </div>
                        <h2 className="title">куда сложнее сделать это правильно!</h2>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default ClassicWeb;