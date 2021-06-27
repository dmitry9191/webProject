import React from 'react';
import './waiting.css';
import WaitingFirst from './img/waiting_1.png';
import WaitingSecond from './img/waiting_2.png';
import WaitingThird from './img/waiting_3.png';

const Waiting = () => {
    return (
        <section className="waiting">
            <div className="container">
                <h2 className="waiting_header">Что вас ждет в нашем интенсиве?</h2>
                <div className="waiting_divider"></div>
                <div className="waiting_subheader">2 бесплатных полноценных обучающих вебинара, где:</div>
                <div className="waiting_wrapper">
                    <div className="waiting_item">
                        <img src={WaitingFirst} alt="first monitor" className="waiting_img" />
                        <div className="waiting_descr">Всего за два бесплатных вебинара мы научим вас, как создать свой сайт на WordPress. </div>
                    </div>
                    <div className="waiting_item">
                        <img src={WaitingSecond} alt="second monitor" className="waiting_img" />
                        <div className="waiting_descr">Покажем, как правильно оптимизировать сайт и сделать его привлекательным для поисковых систем. Только свежая, профессиональная и актуальная информация!</div>
                    </div>
                    <div className="waiting_item">
                        <img src={WaitingThird} alt="waiting third" className="waiting_img" />
                        <div className="waiting_descr">Вы узнаете, что такое «хорошая индексация», «высокая посещаемость», «стабильный прирост посетителей», «ТОП по запросам» и, что намного важнее, как добиться всех этих показателей!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Waiting; 