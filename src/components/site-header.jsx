import PhoneIcon from '../assets/icons/phone-icon.svg?react';
import HeartHeaderIcon from '../assets/icons/heartHeader-icon.svg?react';
import TrolleyIcon from '../assets/icons/trolley-icon.svg?react';
import ShavronIcon from '../assets/icons/shavron-icon.svg?react';
import styles from './site-header.module.scss';
import { Link, useNavigate } from 'react-router';

export function SiteHeader() {
  const navigate = useNavigate();

  const onClickBasket = () => {
    navigate('/basket');
  };

  const onClickFav = () => {
    navigate('/favorites');
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.start}>
            <Link className={styles.title} to={'/'}>
              <p>QPICK</p>
            </Link>

            <div className={styles.choice}>
              <PhoneIcon />
              <p>Выбрать модель телефона</p>
              <ShavronIcon />
            </div>
          </div>

          <div className={styles.wrapper}>
            <button onClick={onClickFav}>
              <HeartHeaderIcon />
            </button>

            <button onClick={onClickBasket}>
              <TrolleyIcon />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
