import Footer from 'Components/Footer';
import Menu from 'Components/Menu';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PaginaPadrao = lazy(() => import('Components/PaginaPadrao'));
const Inicio = lazy(() => import('Pages/Inicio'));
const Cardapio = lazy(() => import('Pages/Cardapio'));
const Sobre = lazy(() => import('Pages/Sobre'));
const Prato = lazy(() => import('Pages/Prato'));
const NotFound = lazy(() => import('Pages/NotFound'));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="prato/:id" element={<Prato />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
