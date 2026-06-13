import styles from './headphones-page.module.scss';
import HeartIcon from '../assets/icons/heart-icon.svg?react';
import ByzImg from '../assets/images/BYZ-img.png';
import StarIcon from '../assets/icons/star-icon.svg?react';
import BlackHeartIcon from '../assets/icons/blackheart-icon.svg?react';
import EarpodsImg from '../assets/images/EarPods-img.png';
import EarpodsSecondImg from '../assets/images/EarPodsSecond-img.png';
import { ProductsTitle } from '../components/products-title';

export default function HeadphonesPage() {
  return (
    <>
      <section className={styles.headphones}>
        <div className="container">
          <ProductsTitle title="Наушникик" />

          <div className={styles.wrapper}>
            <div className={styles.headAll}>
              <div className={styles.heart}>
                <HeartIcon />
              </div>

              <div className={styles.img}>
                <img src={ByzImg} alt="headphones" />
              </div>

              <div className={styles.about}>
                <div className={styles.rating}>
                  <p className={styles.name}>Apple BYZ S852I</p>

                  <div className={styles.starAndRating}>
                    <StarIcon />
                    <p className={styles.star}>4.7</p>
                  </div>
                </div>
                <p className={styles.price}>2927 ₸</p>
              </div>
            </div>

            <div className={styles.headAll}>
              <div className={styles.heart}>
                <BlackHeartIcon />
              </div>

              <div className={styles.img}>
                <img src={EarpodsImg} alt="headphones" />
              </div>

              <div className={styles.about}>
                <div className={styles.rating}>
                  <p className={styles.name}>Apple EarPods</p>

                  <div className={styles.starAndRating}>
                    <StarIcon />
                    <p className={styles.star}>4.5</p>
                  </div>
                </div>
                <p className={styles.price}>2327 ₸</p>
              </div>
            </div>

            <div className={styles.headAll}>
              <div className={styles.heart}>
                <HeartIcon />
              </div>

              <div className={styles.img}>
                <img src={EarpodsSecondImg} alt="headphones" />
              </div>

              <div className={styles.about}>
                <div className={styles.rating}>
                  <p className={styles.name}>Apple EarPods</p>

                  <div className={styles.starAndRating}>
                    <StarIcon />
                    <p className={styles.star}>4.5</p>
                  </div>
                </div>
                <p className={styles.price}> 2327 ₸</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
