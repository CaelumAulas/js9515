import { useState } from 'react';
import Cabecalho from './Cabecalho';
import Container from './Container';
import Formulario from './Formulario';
import Resultado from './Resultado';

export default function Tabuada() {
  let [numeroTabuada, setNumeroTabuada] = useState(0);

  const pegarNumeroTabuada = (numero) => {
    setNumeroTabuada(numero);
  }

  return (
    <Container>
      <Cabecalho titulo="Tabuada" frase="Preencha o formulário abaixo para visualizar a tabuada do número escolhido:" />
      <Formulario submitCallback={pegarNumeroTabuada} />
      <Resultado mensagem="Seu resultado será exibido aqui ;)" valor={numeroTabuada} />
    </Container>
  );
}
