import React from 'react';
import finOne from './img/finish_icon_1.png';
import finTwo from './img/finish_icon_2.png';
import finThree from './img/finish_icon_3.png';
import finFour from './img/finish_icon_4.png';
import finFive from './img/finish_icon_5.png';
import './finish.css';

const Finish = () => {
    
    return (
        <section className="finish">
            <div className="container">
                <h2 className="finish_header">По окончании обучения вы сможете!</h2>
                <div className="finish_divider"></div>

                <div className="finish_wrapper">
                    <div className="finish_item">
                        <div className="finish_round">
                            <img src={finOne} alt="PC" className="finish_icon" />
                        </div>
                        <div className="finish_descr">Создать свой сайт или блог</div>
                    </div>
                    <div className="finish_item">
                        <div className="finish_round">
                            <img src={finTwo} alt="desk" className="finish_icon" />
                        </div>
                        <div className="finish_descr">Правильно его оптимизировать</div>
                    </div>
                    <div className="finish_item">
                        <div className="finish_round">
                            <img src={finThree} alt="graph" className="finish_icon" />
                        </div>
                        <div className="finish_descr">Обеспечить ему медленный, но верный рост в ТОП</div>
                    </div>
                    <div className="finish_item">
                        <div className="finish_round">
                            <img src={finFour} alt="visitors" className="finish_icon" />
                        </div>
                        <div className="finish_descr">Достигнуть стабильного прироста посетителей</div>
                    </div>
                    <div className="finish_item">
                        <div className="finish_round">
                            <img src={finFive} alt="wallet" className="finish_icon" />
                        </div>
                        <div className="finish_descr">Получать ощутимую прибыль</div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Finish;
