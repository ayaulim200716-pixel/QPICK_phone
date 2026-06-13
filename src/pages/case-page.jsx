import styles from './case-page.module.scss';
import { ProductsTitle } from '../components/products-title';
import { CASES } from '../data';
import { CasesAbout } from '../components/cases-about';

export default function CasePage() {
  return (
    <>
      <section className={styles.cases}>
        <div className="container">
          <ProductsTitle title="Чехлы" />

          <div className={styles.allPhones}>
            {CASES.map((item) => (
              <CasesAbout key={item.id} img={item.img} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>
      ;
    </>
  );
}
