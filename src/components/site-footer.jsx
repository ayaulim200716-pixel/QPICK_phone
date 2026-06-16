import styles from '../components/site-footer.module.scss';
import GlobeIcon from '../assets/icons/globe-icon.svg?react';
import VKIcon from '../assets/icons/VK-icon.svg?react';
import InstaIcon from '../assets/icons/Instagram-icon.svg?react';
import TelegaIcon from '../assets/icons/Telegram-icon.svg?react';
import WhatsappIcon from '../assets/icons/Whatsapp-icon.svg?react';

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
  },
  {
    id: 2,
    link: '#',
    name: 'Корзина',
  },
  {
    id: 3,
    link: '#',
    name: 'Контакты',
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
          <div className={styles.title}>
            <p>QPICK</p>
          </div>

          <div className={styles.navLinks}>
            <ul className={styles.list}>
              {footerLinks.map((link) => (
                <li key={link.id} className={styles.item}>
                  <button className={styles.link}>{link.name}</button>
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
              <a
                href={social.link}
                className={styles.socialBtn}
                key={social.id}
              >
                <social.way />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}
