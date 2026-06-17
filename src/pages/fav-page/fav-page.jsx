import styles from './fav-page.module.scss';
import { ProductsTitle } from '../../components/products-title';
import { headphones } from '../../data';
import ProductCard from '../../components/products-card';
import { wirelesses2 } from '../../data';

export default function FavoritesPage() {
  return (
    <div className="container">
      <h3 className={styles.title}>Избранное</h3>
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

      <section className={styles.wireless}>
        <div className="container">
          <ProductsTitle title="Беспроводные наушники" />

          <div className={styles.wrapper}>
            {wirelesses2.map((wireless) => (
              <ProductCard {...wireless} key={wireless.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
