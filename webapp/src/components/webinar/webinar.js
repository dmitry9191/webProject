import React from 'react';
import first from './first.png';
import './webinar.css';

const Webinar = () => {
    
    return (
        <section className="webinar">
            <div className="container">
                <img src={first} alt="first" className="webinar_img" />
                <h2 className="webinar_title">Первый вебинар состоится:</h2>
                <span>10 сентября в 20:00 по Москве</span>
                <p>Успейте записаться, количество мест ограничено!</p>
            </div>
        </section>
    )
    
}

export default Webinar;