import styles from './case-page.module.scss';
import glassCaseImg from '../assets/images/glassCase-img.png';
import yellowCaseImg from '../assets/images/yellowCase-img.png';
import blackCaseImg from '../assets/images/blackCase-img.png';
import { ProductsTitle } from '../components/products-title';

export default function CasePage() {
  return (
    <>
      <section className={styles.cases}>
        <div className="container">
          <ProductsTitle title="Чехлы" />

          <div className={styles.allPhones}>
            <div className={styles.phone}>
              <img src={glassCaseImg} alt="glass case" />
              <h4 className={styles.desc}>Стеклянные</h4>
            </div>
            <div className={styles.phone}>
              <img src={yellowCaseImg} alt="glass case" />
              <h4 className={styles.desc}>Силиконовые</h4>
            </div>
            <div className={styles.phone}>
              <img src={blackCaseImg} alt="glass case" />
              <h4 className={styles.desc}>Кожаные</h4>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
