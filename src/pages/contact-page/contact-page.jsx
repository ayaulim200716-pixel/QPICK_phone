import LocationIcon from '../../assets/icons/location-icon.svg?react';
import VKIcon from '../../assets/icons/VK-icon.svg?react';
import TelegaIcon from '../../assets/icons/Telegram-icon.svg?react';
import InstaIcon from '../../assets/icons/Instagram-icon.svg?react';
import WhatsappIcon from '../../assets/icons/Whatsapp-icon.svg?react';
import CallIcon from '../../assets/icons/call-icon.svg?react';
import styles from './contact-page.module.scss';

const ContactSocials = [
  {
    id: 1,
    link: 'https://web.whatsapp.com/',
    way: WhatsappIcon,
  },
  {
    id: 2,
    link: 'https://vk.com/login',
    way: VKIcon,
  },
  {
    id: 3,
    link: 'https://web.telegram.org/a/',
    way: InstaIcon,
  },
  {
    id: 4,
    link: 'https://www.instagram.com/',
    way: TelegaIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.office}>
          <h4 className={styles.title}>Наш офис</h4>
          <img src="/src/assets/images/adress-img.png" alt="adress" />
          <div className={styles.location}>
            <LocationIcon />
            <h4>Аксай-3а, 62ф, Алматы, Казахстан</h4>
          </div>
          <div className={styles.cab}>
            <p>3 этаж 35 кабинет</p>
          </div>
        </div>

        <div className={styles.socials}>
          <ul>
            {ContactSocials.map((social) => (
              <li>
                <a
                  className={styles.socialsBtn}
                  href={social.link}
                  key={social.id}
                  target="_blank"
                >
                  <social.way />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.contact}>
        <CallIcon />
        <p>+7 777 777 77 77</p>
      </div>
    </div>
  );
}
