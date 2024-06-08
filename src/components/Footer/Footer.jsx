import React from 'react';
import './Footer.css';
import Facebook from '../../../assets/facebook_ikonka.png';
import Mail from '../../../assets/mail_ikonka.png';
import Instagram from '../../../assets/instagram_ikonka.png';
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="containter-footer">
          <div className="footer_icons">
            <img src={Instagram} alt="ikona_instagram" />
            <img src={Facebook} alt="ikona_facebook" />
            <img src={Mail} alt="ikona_mail" />
          </div>
          <div>
            <p className="footer_text">
              Unikátní záchody vytvořili Vardui Saribekian & Barbora Nováková.
            </p>
            <p className="footer_text">
              Speciální poděkování patří Týně Woloszczukové a Kájovi Dohnalovi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
