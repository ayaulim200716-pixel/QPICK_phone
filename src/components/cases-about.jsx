import styles from '../components/case-section.module.scss';

export function CasesAbout(props) {
  const { img, desc } = props;
  return (
    <div className={styles.phone}>
      <img src={img} alt="glass case" />
      <h4 className={styles.desc}>{desc}</h4>
    </div>
  );
}
