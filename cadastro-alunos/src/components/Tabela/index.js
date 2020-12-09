export default function Tabela(props)
{
    const listaAlunos = props.lista;
    
    return (
        <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Série</th>
                    <th>Notas</th>
                    <th>Média Final</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaAlunos.map((aluno, index) => {
                        let media = (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4) / 4;
                        return (
                            <tr key={index}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.telefone}</td>
                                <td>{aluno.serie}</td>
                                <td>{aluno.n1} / {aluno.n2} / {aluno.n3} / {aluno.n4}</td>
                                <td>{media.toFixed(1)}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    );
}