import styles from './headphones-wireless-page.module.scss';
import { ProductsTitle } from '../components/products-title';
import { headphones } from '../data';
import HeadphonesProps from '../components/headphonesprops';

export default function HeadphonesPage() {
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
