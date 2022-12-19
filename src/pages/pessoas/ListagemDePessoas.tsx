import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FerramentasDeListagem } from '../../shared/components';
import { useDebounce } from '../../shared/hooks/UseDebounce';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      PessoasService.getAll(1, busca).then(result => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        }
        console.log(result);
      });
    });
  }, [busca]);

  return (
    <LayoutBaseDePagina
      titulo="Listagem de Pessoas"
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
