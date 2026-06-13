import styles from './products-title.module.scss';

export function ProductsTitle(props) {
  return <p className={styles.title}>{props.title}</p>;
}
