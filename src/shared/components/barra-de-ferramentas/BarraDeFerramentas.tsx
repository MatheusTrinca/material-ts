import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';

interface IBarraDeFerramentasProps {
  textDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMostrarTextoDeBusca?: (novoText: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textDaBusca = '',
  mostrarInputBusca = false,
  aoMostrarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      display="flex"
      alignItems="center"
      component={Paper}
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textDaBusca}
          onChange={e => aoMostrarTextoDeBusca?.(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            onClick={aoClicarEmNovo}
            disableElevation
            endIcon={<Icon>add</Icon>}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
