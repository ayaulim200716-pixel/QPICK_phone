import PhoneIcon from '../assets/icons/phone-icon.svg?react';
import HeartIcon from '../assets/icons/heart-icon.svg?react';
import TrolleyIcon from '../assets/icons/trolley-icon.svg?react';
import ShavronIcon from '../assets/icons/shavron-icon.svg?react';
import styles from './site-header.module.scss';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.start}>
            <div className={styles.title}>
              <p>QPICK</p>
            </div>

            <div className={styles.choice}>
              <PhoneIcon />
              <p>Выбрать модель телефона</p>
              <ShavronIcon />
            </div>
          </div>

          <div className={styles.wrapper}>
            <HeartIcon />
            <TrolleyIcon />
          </div>
        </nav>
      </div>
    </header>
  );
}
