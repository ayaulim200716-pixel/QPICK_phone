import { SiteHeader } from './components/site-header';
import MainPage from './pages/main-page';
import { SiteFooter } from './components/site-footer';

export default function App() {
  return (
    <div>
      <SiteHeader />
      <MainPage />
      <SiteFooter />
    </div>
  );
}
