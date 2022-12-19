import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ListagemDePessoas } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { handleSetDrawerOptions } = useDrawerContext();

  useEffect(() => {
    handleSetDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página Inicial',
      },
      {
        icon: 'people',
        path: '/pessoas',
        label: 'Pessoas',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      {/* <Route path="/cidades/detalhe/:id" element={<ListagemDeCidade />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
