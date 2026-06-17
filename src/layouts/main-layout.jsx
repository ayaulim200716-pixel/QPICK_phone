import styles from './main-layout.module.scss';
import { Outlet } from 'react-router';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export function MainLayout() {
  return (
    <div>
      <SiteHeader />

      <main className={styles.main}>
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}
