import React from 'react';
import './Footer.css';
import Facebook from '../../../assets/facebook_ikonka.png';
import Mail from '../../../assets/mail_ikonka.png';
import Instagram from '../../../assets/instagram_ikonka.png';
export const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="containter-footer">
          <div className="footer_icons">
            <a href="https://www.instagram.com/brbora_n/" target="_blank">
              <img src={Instagram} alt="ikona_instagram" />
            </a>
            <a href="https://www.facebook.com/vartui.saribekyan/">
              <img src={Facebook} alt="ikona_facebook" />
            </a>
            <a href="mailto:vartvioline@gmail.com">
              <img src={Mail} alt="ikona_mail" />
            </a>
          </div>
          <div>
            <p className="footer_text">
              Unikátní záchody vytvořily Vardui Saribekian & Barbora Nováková.
            </p>
            <p className="footer_text">
              Speciální poděkování patří Týně Woloszczukové, Andrejce Tilcerové
              a Kájovi Dohnalovi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
