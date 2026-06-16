import style from '../pages/fav-page.module.scss';
import styles from '../components/headphones-wireless-section.module.scss';
import { ProductsTitle } from '../components/products-title';
import { headphones } from '../data';
import HeadphonesProps from '../components/headphonesprops';
import { wirelesses } from '../data';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export default function FavoritesPage() {
  return (
    <div className="container">
      <SiteHeader />
      <h3 className={style.title}>Избранное</h3>
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

      <section className={styles.wireless}>
        <div className="container">
          <ProductsTitle title="Беспроводные наушники" />

          <div className={styles.wrapper}>
            {wirelesses.map((wireless) => (
              <HeadphonesProps {...wireless} key={wireless.id} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
