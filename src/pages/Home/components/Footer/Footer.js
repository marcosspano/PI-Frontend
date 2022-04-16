import React from 'react';
import facebook from '../../../../Assets/img/facebook-brands.svg';
import linkedin from '../../../../Assets/img/linkedin-in-brands.svg';
import twitter from '../../../../Assets/img/twitter-brands.svg';
import instagram from '../../../../Assets/img/instagram-brands.svg';

import './style.css'

function Footer () {
    return (
        <>
            <footer className="rodape">
                <div className="rodape__Copyright">
                    <p className="copyright">@2022 Digital Booking</p>
                </div>
                <div className="rodape__Social">
                    <ul>
                        <li><img src={facebook} alt="Facebook" /></li>
                        <li><img src={linkedin} alt="Linkedin" /></li>
                        <li><img src={twitter} alt="Twitter" /></li>
                        <li><img src={instagram} alt="Instagram" /></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;