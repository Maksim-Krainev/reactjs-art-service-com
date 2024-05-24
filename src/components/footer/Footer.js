import "./style.css";
import footerLogo from "./../../img/logo.png";
import visaCard from "./../../img/icons/visa-classic-svgrepo-com.svg";
import masterCard from "./../../img/icons/mastercard-full-svgrepo-com.svg";


const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
					<li className="social__item social__item-logo ">
							<img src={footerLogo} alt="Логотип в підвалі сайту" width={200}/>
							<div className="card">
							<img src={visaCard} alt="Логотип віза" width={50}/>
							<img src={masterCard} alt="Логотип мастеркарт" width={50}/>
					</div>
						</li>
						
						<li className="social__item">
							<h2 className="title-2">Графік роботи</h2>
							<p>
								ПН-ПТ: <span>09:00–19:00</span>
							</p>
							<p>
								СБ: <span>12:00–15:00</span>
							</p>
							<p>
								Неділя: <span>Закрито</span>
							</p>
						</li>
						<li className="social__item">
							<h2 className="title-2">Контакти</h2>
							<p>Телефон: <a href="tel:+380507685111">+380507685111</a></p>
          					<p>Instagram: <a href="https://www.instagram.com/art_service111">art_service111</a></p>
							<p>Пошта: <a href="mailto:1@gmail.com">1@gmail.com</a></p>
							<p>Адреса: <a href="https://maps.app.goo.gl/TCLfVMq9PY1ypnJa7">Берестейський проспект, 99/1</a></p>
							
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;