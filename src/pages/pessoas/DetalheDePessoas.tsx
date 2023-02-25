import { useNavigate, useParams } from 'react-router-dom';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { FerramentasDeDetalhe } from '../../shared/components';
import { useEffect, useState } from 'react';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { LinearProgress } from '@mui/material';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);
      PessoasService.getById(Number(id)).then(result => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoas');
        } else {
          setNome(result.nomeCompleto);
          console.log(result);
        }
      });
    }
  }, [id]);

  const handleSave = () => {
    console.log('saved');
  };

  const handleDelete = (id: number) => {
    if (confirm('Deseja realmente apagar?')) {
      PessoasService.deleteById(id).then(result => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Registro apagado com sucesso');
          navigate('/pessoas');
        }
      });
    }
  };

  return (
    <LayoutBaseDePagina
      titulo={id !== 'novo' ? nome : 'Nova Pessoa'}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          mostrarBotaoSalvarEFechar
          textoBotaoNovo="Nova"
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}
    </LayoutBaseDePagina>
  );
};
