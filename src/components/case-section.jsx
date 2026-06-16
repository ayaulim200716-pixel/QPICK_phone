import styles from './case-section.module.scss';
import { ProductsTitle } from './products-title';
import { CASES } from '../data';
import { CasesAbout } from './cases-about';

export default function CaseSection() {
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
