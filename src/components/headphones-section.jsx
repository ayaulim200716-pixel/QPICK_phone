import styles from './headphones-wireless-section.module.scss';
import { ProductsTitle } from './products-title';
import { headphones } from '../data';
import HeadphonesProps from './headphonesprops';

export default function HeadphonesSection() {
  return (
    <>
      <section className={styles.headphones}>
        <div className="container">
          <ProductsTitle title="Наушники" />

          <div className={styles.wrapper}>
            {headphones.map((headphones) => (
              <HeadphonesProps
                key={headphones.id}
                img={headphones.img}
                price={headphones.price}
                name={headphones.name}
                rating={headphones.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
