import React from 'react';
import { FerramentasDeListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const ListagemDeCidade: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Listagem de Cidades"
      barraDeFerramentas={
        <FerramentasDeListagem mostrarInputBusca textoBotaoNovo="Nova" />
      }
    ></LayoutBaseDePagina>
  );
};
