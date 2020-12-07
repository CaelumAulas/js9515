import Cabecalho from './Cabecalho';
import Container from './Container';
import Formulario from './Formulario';
import Resultado from './Resultado';

export default function Tabuada() {
  return (
    <Container>
      <Cabecalho titulo="Tabuada" frase="Preencha o formulário abaixo para visualizar a tabuada do número escolhido:" />
      <Formulario />
      <Resultado mensagem="Seu resultado será exibido aqui ;)" />
    </Container>
  );
}
