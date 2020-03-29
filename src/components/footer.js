import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../style/footer.css'

const Footer = () => (
  <section className="footer_wrapper" id="footer">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
				  <li className="list-inline-item"><a className="icon_link" href="https://www.facebook.com/betrybe/" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon icon={faFacebook} size="lg" /></a></li>
 					<li className="list-inline-item"><a className="icon_link" href="https://twitter.com/betrybe" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
				  <li className="list-inline-item"><a className="icon_link" href="https://www.linkedin.com/school/betrybe/" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
				  <li className="list-inline-item"><a className="icon_link" href="https://www.youtube.com/channel/UCZeN5eLUwiIyMaQjKR_ydVg" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a></li>
				  <li className="list-inline-item"><a className="icon_link" href="https://www.instagram.com/betrybe/" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a></li>
				</div>
				<br />
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>Desenvolvido durante o HackTrybe por estudantes da Trybe</p>
				</div>
				<br />
			</div>
		</div>
	</section>
);

export default Footer;
