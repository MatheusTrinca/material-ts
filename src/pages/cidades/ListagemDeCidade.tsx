import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FerramentasDeListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBaseDePagina
      titulo="Listagem de Cidades"
      barraDeFerramentas={
        <FerramentasDeListagem
          mostrarInputBusca
          textoBotaoNovo="Nova"
          textDaBusca={busca}
          aoMostrarTextoDeBusca={texto =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    >
      Algo
    </LayoutBaseDePagina>
  );
};
