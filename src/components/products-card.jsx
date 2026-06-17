import HeartIcon from '../assets/icons/heart-icon.svg?react';
import StarIcon from '../assets/icons/star-icon.svg?react';
import styles from '../components/products-card.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export default function ProductCard(props) {
  const [isActive, setIsActive] = useState(false);
  const { img, price, name, rating } = props;

  return (
    <div className={styles.headAll}>
      <div className={styles.heart}>
        <button onClick={() => setIsActive(!isActive)}>
          <HeartIcon
            className={clsx(isActive ? styles.active : styles.inactive)}
          />
        </button>
      </div>

      <div className={styles.img}>
        <img src={img} alt="headphones" />
      </div>

      <div className={styles.about}>
        <div className={styles.rating}>
          <p className={styles.name}>{name}</p>

          <div className={styles.starAndRating}>
            <StarIcon />
            <p className={styles.star}>{rating}</p>
          </div>
        </div>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}
