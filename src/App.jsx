import { Route, Routes } from 'react-router';
import MainPage from './pages/main-page';
import FavoritesPage from './pages/fav-page';
import BasketPage from './pages/basket-page';

export default function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}
