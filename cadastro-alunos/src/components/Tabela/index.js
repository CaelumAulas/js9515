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
                <tr>
                    <td>Adriano</td>
                    <td>adriano@teste.com.br</td>
                    <td>(11) 5252-8989</td>
                    <td>5ª A</td>
                    <td>5.5 / 8.0 / 7.5 / 6.5</td>
                    <td>7.9</td>
                </tr>
            </tbody>
        </table>
    );
}