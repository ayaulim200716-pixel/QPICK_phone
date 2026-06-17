import { Route, Routes } from 'react-router';
import MainPage from './pages/main-page';
import FavoritesPage from './pages/fav-page/fav-page';
import BasketPage from './pages/basket-page/basket-page';
import ContactPage from './pages/contact-page/contact-page';
import ConditionsPage from './pages/conditions-page/conditions-page';
import { MainLayout } from './layouts/main-layout';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
      </Route>
    </Routes>
  );
}
