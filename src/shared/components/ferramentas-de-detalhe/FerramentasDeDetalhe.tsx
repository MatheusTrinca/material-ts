/* eslint-disable indent */
import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

interface IFerramentasDeListagemProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeListagemProps> = ({
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      display="flex"
      alignItems="center"
      // O Box agora tem as propriedades do Paper (por default a sombra(elevation), cor de fundo, borderRadius)
      component={Paper}
    >
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}
        >
          <Typography variant="button" noWrap={true}>
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !smDown &&
        !mdDown && (
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<Icon>save</Icon>}
            onClick={aoClicarEmSalvarEFechar}
          >
            <Typography variant="button" noWrap={true}>
              Salvar e Fechar
            </Typography>
          </Button>
        )}
      {mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          <Typography variant="button" noWrap={true}>
            Apagar
          </Typography>
        </Button>
      )}
      {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          <Typography variant="button" noWrap={true}>
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {mostrarBotaoNovoCarregando && !smDown && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoVoltar && mostrarBotaoApagar) ||
        mostrarBotaoNovo ||
        mostrarBotaoSalvar ||
        (mostrarBotaoSalvarEFechar && (
          <Divider variant="middle" orientation="vertical" />
        ))}

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          <Typography variant="button" noWrap={true}>
            Voltar
          </Typography>
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
    </Box>
  );
};
