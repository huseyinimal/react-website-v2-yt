import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { SiAircanada } from "react-icons/si";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        En son çıkan haberleri herkesten önce öğrenmek için aramıza katıl
        </p>
        <p className='footer-subscription-text'>
         İstediğin zaman abonelikten çıkabilirsin
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email adresiniz'
            />
            <Button buttonStyle='btn--outline'>Abone Ol</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Hakkımızda</h2>
            <Link to='/sign-up'>Nasıl Çalışıyoruz?</Link>
            <Link to='/'>Kariyer</Link>
            <Link to='/'>Anlaşmalı Olduğumuz Şirketler</Link>
            <Link to='/'>Kullanım Şartları</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Bizimle İletişime Geçin</h2>
            <Link to='/'>İletişim</Link>
            <Link to='/'>Canlı Destek</Link>
            <Link to='/'>Sponsorluklarımız</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videolar</h2>
            <Link to='/'>Video Gönder</Link>
            <Link to='/'>Ajansımız</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Sosyal Medya Hesaplarımız</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <SiAircanada className='navbar-icon' />
              LAVISH
            </Link>
          </div>
          <small className='website-rights'>imcoolrick © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;