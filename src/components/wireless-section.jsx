import styles from './headphones-wireless-section.module.scss';
import { ProductsTitle } from './products-title';
import HeadphonesProps from './headphonesprops';
import { wirelesses } from '../data';

export default function WirelessSection() {
  return (
    <>
      <section className={styles.wireless}>
        <div className="container">
          <ProductsTitle title="Беспроводные наушники" />

          <div className={styles.wrapper}>
            {wirelesses.map((wireless) => (
              <HeadphonesProps
                key={wireless.id}
                img={wireless.img}
                price={wireless.price}
                name={wireless.name}
                rating={wireless.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
