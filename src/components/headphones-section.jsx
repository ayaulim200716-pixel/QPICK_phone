import styles from './products-card.module.scss';
import { ProductsTitle } from './products-title';
import { headphones } from '../data';
import ProductCard from './products-card';

export default function HeadphonesSection() {
  return (
    <>
      <section className={styles.headphones}>
        <div className="container">
          <ProductsTitle title="Наушники" />

          <div className={styles.wrapper}>
            {headphones.map((headphones) => (
              <ProductCard
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
