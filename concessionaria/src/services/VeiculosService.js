export default class VeiculosService
{
    static async cadastrar(dadosCadastro)
    {
        const resposta = await fetch('https://api-concessionaria.herokuapp.com/cadastrar-veiculo.php', {
            method: 'POST',
            body: dadosCadastro
        });
        const dadosServidor = await resposta.json();

        if (dadosServidor.status === 0) {
            throw new Error(dadosServidor.message);
        }

        return dadosServidor;
    }

    static async listar()
    {
        const resposta = await fetch('https://api-concessionaria.herokuapp.com/listar-veiculos.php');
        const listaDeVeiculosServidor = await resposta.json();
        return listaDeVeiculosServidor;
    }

    static async getVeiculo(id)
    {
        const resposta = await fetch(`https://api-concessionaria.herokuapp.com/get-veiculo.php?id=${id}`);
        const dadosVeiculo = await resposta.json();
        return dadosVeiculo;
    }

    static async remover(id, token)
    {
        const params = new URLSearchParams();
        params.append('token', token);
        params.append('id', id);

        let urlDelete = 'https://api-concessionaria.herokuapp.com/excluir-veiculo.php?' + params;
        const resposta = await fetch(urlDelete, { method: 'DELETE' });
        const dadosExclusao = await resposta.json();

        if (dadosExclusao.status === 0) {
            throw new Error(dadosExclusao.message);
        }

        return dadosExclusao;
    }

    static async atualizar(dadosAtualizacao)
    {
        const resposta = await fetch('https://api-concessionaria.herokuapp.com/atualizar-veiculo.php', {
            method: 'POST',
            body: dadosAtualizacao
        });
        const dadosServidor = await resposta.json();

        if (dadosServidor.status === 0) {
            throw new Error(dadosServidor.message);
        }

        return dadosServidor;
    }
}