import React from 'react';
import gift from './gift.png';
import './gifts.css';

const Gifts = () => {
    
    return (
        <section className="gifts">
            <div className="container">
                <img src={gift} alt="gift" className="gifts_img" />
                <div className="gifts_text">Для всех участников интенсива предусмотрены бонусы и подарки. Нажимайте на кнопку ниже, принимайте участие в вебинарах и забирайте свой приз по окончании обучения!</div>
                <button className="gifts_btn">Записаться на интенсив!</button>
            </div>
        </section>
    )

}

export default Gifts;