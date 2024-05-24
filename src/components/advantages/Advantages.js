import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Advantages(){
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return(
        <div className="advantages-grid">
            <div className="advantage advantage1" data-aos="fade-right" data-aos-delay="300">
                <i className="ti-bar-chart"></i>
                <h4>Досвідчені робітник</h4>
                <p>
                    У нашому центрі працюють висококваліфіковані техніки з багаторічним досвідом у ремонті різноманітних пристроїв.
                </p>
            </div>
            <div className="advantage advantage2" data-aos="fade-up" data-aos-delay="200">
                <i className="ti-light-bulb"></i>
                <h4>Конкурентні ціни</h4>
                <p>
                    Наші ціни є конкурентними та доступними, що робить наші послуги вигідними для кожного клієнта. Ми пропонуємо чесні ціни без прихованих платежів і завжди готові надати консультацію з будь-яких питань, пов'язаних з ремонтом вашого пристрою.
                </p>
            </div>
            <div className="advantage advantage3" data-aos="fade-left" data-aos-delay="300">
                <i className="ti-money"></i>
                <h4>Якісні запчастини</h4>
                <p>
                    Ми використовуємо лише оригінальні запчастини або високоякісні аналоги, що забезпечує тривалий термін служби відремонтованих пристроїв.
                </p>
            </div>
        </div>
    );
}

export default Advantages;