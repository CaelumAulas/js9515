import { useEffect, useRef } from "react";
import MasterPage from "../../components/MasterPage/index.js";
import { validarFormulario } from "../../lib/ValidacaoForm.js";
import LoginService from "../../services/LoginService.js";
import VeiculosService from "../../services/VeiculosService.js";

export default function EditarPage(props)
{
    const formEditar = useRef();
    const params = new URLSearchParams(props.location.search);
    const id = params.get('id');

    const editarHandler = async (event) => {
        event.preventDefault();
        const campos = Array.from(event.target.elements).filter(campo => campo.name !== '');

        try
        {
            if (validarFormulario(campos))
            {
                const token = LoginService.getToken();
                const dadosAtualizacao = new FormData(event.target);
                dadosAtualizacao.append('token', token);
                dadosAtualizacao.append('id', id);

                await VeiculosService.atualizar(dadosAtualizacao);
                alert('Dados atualizados com sucesso!');
            }
        }
        catch(e) 
        {
            alert(e.message);
            console.error(e);
        }
    }

    async function carregarVeiculo()
    {
        const dadosVeiculo = await VeiculosService.getVeiculo(id);

        for (let p in dadosVeiculo)
        {
            if (formEditar.current.elements[p]) {
                formEditar.current.elements[p].value = dadosVeiculo[p];
            }
        }
    }

    useEffect(() => {
        carregarVeiculo(id);
    }, []);

    return (
        <MasterPage title="Editar Veículo">
            <form onSubmit={editarHandler} ref={formEditar} id="formVeiculo" method="POST" className="row">
                <div className="form-group col-md-6">
                    <label>Marca:</label>
                    <select name="marca" className="form-control custom-select" data-msg="Marca é obrigatório!">
                        <option value="">-- Selecionar --</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                        <option value="Hyiundai">Hyiundai</option>
                    </select>
                    <div className="alert-danger w-100 p-2 d-none">Marca é obrigatório</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Modelo:</label>
                    <input type="text" name="modelo" data-msg="Modelo inválido!" className="form-control" placeholder="Insira o nome do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Modelo inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Ano:</label>
                    <input type="number" name="ano" data-msg="Ano inválido!" className="form-control" placeholder="Insira o ano do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Ano inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Preço:</label>
                    <input type="text" name="preco" data-msg="Preço inválido!" className="form-control" placeholder="Insira o preço do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Preço inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Foto:</label>
                    <input type="text" name="foto" className="form-control" placeholder="Insira o nome da foto" />
                </div>
                <div className="form-group col-md-6">
                    <label>Cor:</label>
                    <select name="cor" data-msg="Cor é obrigatório!" className="form-control custom-select">
                        <option value="">-- Selecionar --</option>
                        <option value="Preto">Preto</option>
                        <option value="Branco">Branco</option>
                        <option value="Prata">Prata</option>
                        <option value="Vermelho">Vermelho</option>
                    </select>
                    <div className="alert-danger w-100 p-2 d-none">Cor é obrigatório</div>
                </div>
                <div className="form-group col-md-12">
                    <label>Descrição:</label>
                    <textarea className="form-control" data-msg="Descrição é obrigatório!" name="descricao" rows="10" placeholder="Insira a descrição do veículo"></textarea>
                    <div className="alert-danger w-100 p-2 d-none">Descrição é obrigatório</div>
                </div>
                <div className="form-group col-md-12 text-right">
                    <button className="btn btn-primary">
                        Salvar Veículo
                    </button>
                    <button type="reset" className="btn btn-secondary">
                        Limpar
                    </button>
                </div>
            </form>
        </MasterPage>
    );
}