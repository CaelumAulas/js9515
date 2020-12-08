import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

function App() {
  const [listaAlunos, setListaAlunos] = useState([]);

  const cadastrarAluno = (dadosAluno) => {
    setListaAlunos([
      dadosAluno, ...listaAlunos
    ]);
  }

  return (
    <Container>
      <Cabecalho titulo="Caelum | Cadastro de Alunos e Notas" />
      <Formulario cadastroCallback={cadastrarAluno} />
      <Tabela lista={listaAlunos} />
    </Container>
  );
}

export default App;
