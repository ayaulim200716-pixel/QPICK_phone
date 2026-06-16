import HeartIcon from '../assets/icons/heart-icon.svg?react';
import StarIcon from '../assets/icons/star-icon.svg?react';
import styles from '../components/headphones-wireless-section.module.scss';

export default function HeadphonesProps(props) {
  const { img, price, name, rating } = props;

  return (
    <div className={styles.headAll}>
      <div className={styles.heart}>
        <HeartIcon />
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
