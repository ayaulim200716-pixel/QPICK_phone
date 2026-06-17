import GarbageIcon from '../../assets/icons/garbage-icon.svg?react';
import TruckIcon from '../../assets/icons/truck-icon.svg?react';
import ShavronIcon from '../../assets/icons/shavron-icon.svg?react';
import styles from './basket-page.module.scss';

export default function BasketPage() {
  return (
    <div className="container">
      <h3 className={styles.title}>Корзина</h3>
      <div className={styles.cards}>
        <div>
          <card>
            <div className={styles.card}>
              <div className={styles.img}>
                <div className={styles.garbage}>
                  <GarbageIcon className={styles.icon} />
                </div>
                <img src="/src/assets/images/BYZ-img.png" alt="headphones" />
              </div>

              <div className={styles.headphones}>
                <p className={styles.about}> Apple BYZ S852I</p>
                <p className={styles.price}>2927 ₸</p>
              </div>
            </div>

            <div className={styles.card2}>
              <div className={styles.delivery}>
                <h4 className={styles.name}>Доставка</h4>
                <img
                  src="/src/assets/images/map-img.png"
                  alt="map"
                  className={styles.map}
                />
                <div className={styles.deliveryAbout}>
                  <div className={styles.truck}>
                    <TruckIcon />
                    <p>Доставка курьером</p>
                    <ShavronIcon />
                  </div>

                  <h4> 499 ₸</h4>
                </div>
              </div>
            </div>
          </card>
        </div>
        <div className={styles.card3}>
          <div className={styles.inAll}>
            <p>ИТОГО</p>
            <h4>₸ 2 927</h4>
          </div>
          <button className={styles.btn}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
}
