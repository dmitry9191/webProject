import React from 'react';
import './header.css';

const Header = () => {
    return (
        <body>
            <section className="promo">
                <div className="container">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + '/img/icons/logo.png'} alt="logo" className="logo_img"/>
                        <div class="logo_text">Wordpress интенсив</div>
                    </div>
                    <h1 className="title">Создать свой сайт на Wordpress</h1>
                    <div className="simple">
                        <h2 className="title_big">это просто!</h2>
                        <div className="line"></div>
                    </div>
                    <h2 className="title">куда сложнее сделать это правильно!</h2>
                    <div className="promo_text">
                    Ежедневно в России появляется более 5 000 новых сайтов.<br/>И только единицы из них становятся популярными и приносят ощутимую прибыль. В чем секрет? В чем формула успеха? Узнайте на предстоящем двухдневном <span>БЕСПЛАТНОМ </span>интенсиве!
                    </div>
                    <button className="promo_btn">Записаться на интенсив!</button>
                    <div className="more">
                        <div className="more_text">Узнать больше об интенсиве</div>
                        <img className="more_img" src={process.env.PUBLIC_URL + '/img/icons/down.png'} alt="down"/>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default Header;