import "./style.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import BgImg01 from "./../../img/hero_bg_01.jpg"
import BgImg02 from "./../../img/hero_bg_02.jpg"
import BgImg03 from "./../../img/hero_bg_03.jpg"

const Header = () => {
    return (
		<header className="header">
			<Carousel
                showArrows={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={5000}
                swipeable={false}
                emulateTouch={false}
                stopOnHover={false}
            >
                <div>
                    <img src={BgImg01} alt="Слайд 1" />
                </div>
                <div>
                    <img src={BgImg02} alt="Слайд 2" />
                </div>
                <div>
                    <img src={BgImg03} alt="Слайд 3" />
                </div>
            </Carousel>
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
					<em>Art</em> Service 
					</strong>
					<br />ваша гарантія надійності
				</h1>
				<div className="header__text">
					<p>У вас щось зламалось? Ми знаємо, як виправити це!</p>
				</div>
			</div>
		</header>
	);
}

export default Header;