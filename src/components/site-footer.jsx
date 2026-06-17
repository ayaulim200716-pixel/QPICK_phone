import styles from '../components/site-footer.module.scss';
import GlobeIcon from '../assets/icons/globe-icon.svg?react';
import VKIcon from '../assets/icons/VK-icon.svg?react';
import InstaIcon from '../assets/icons/Instagram-icon.svg?react';
import TelegaIcon from '../assets/icons/Telegram-icon.svg?react';
import WhatsappIcon from '../assets/icons/Whatsapp-icon.svg?react';
import { Link } from 'react-router';

const footerLangs = [
  {
    id: 1,
    name: 'Каз',
  },
  {
    id: 2,
    name: 'Рус',
  },
  {
    id: 3,
    name: 'Eng',
  },
];

const footerLinks = [
  {
    id: 1,
    link: '#',
    name: 'Избранное',
    href: '/favorites',
  },
  {
    id: 2,
    link: '#',
    name: 'Корзина',
    href: '/basket',
  },
  {
    id: 3,
    link: '#',
    name: 'Контакты',
    href: '/contact',
  },
];

const footerSocials = [
  {
    id: 1,
    link: 'https://vk.com/login',
    way: VKIcon,
  },
  {
    id: 2,
    link: 'https://www.instagram.com/',
    way: TelegaIcon,
  },
  {
    id: 3,
    link: 'https://web.telegram.org/a/',
    way: InstaIcon,
  },
  {
    id: 4,
    link: 'https://web.whatsapp.com/',
    way: WhatsappIcon,
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <nav className={styles.nav}>
          <Link className={styles.title} to={'/'}>
            <p>QPICK</p>
          </Link>

          <div className={styles.navLinks}>
            <ul className={styles.list}>
              {footerLinks.map((link) => (
                <li key={link.id} className={styles.item}>
                  <Link to={link.href} className={styles.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.service}>
            <p className={styles.serviceTitle}>Условия сервиса</p>
            <div className={styles.languages}>
              <GlobeIcon />

              {footerLangs.map((lang) => (
                <button className={styles.btn} key={lang.id}>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.social}>
            {footerSocials.map((social) => (
              <Link
                to={social.link}
                className={styles.socialBtn}
                key={social.id}
                target="_blank"
              >
                <social.way />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}
