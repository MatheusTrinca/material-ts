import {
  Icon,
  IconButton,
  // Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutDePaginaProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutDePaginaProps> = ({
  children,
  titulo,
  barraDeFerramentas,
}) => {
  // A mesma coisa mas declarando antes o useMediaQuery
  // const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  // const theme = useTheme();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        display="flex"
        alignItems="center"
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          // Evitando quebrar, text pode passar o componenete, ellipsis gera "..."
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>
      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}

      {/* Overflow auto gera barra de scroll so nesse componente */}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

// React, Material UI 5 e Typescript: #13 - Configurando troca de tema dark e light
