import styles from './products-card.module.scss';
import { ProductsTitle } from './products-title';
import { wirelesses } from '../data';
import ProductCard from './products-card';

export default function WirelessSection() {
  return (
    <>
      <section className={styles.wireless}>
        <div className="container">
          <ProductsTitle title="Беспроводные наушники" />

          <div className={styles.wrapper}>
            {wirelesses.map((wireless) => (
              <ProductCard
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
