import { useContext, useEffect, useState } from "react";
import { ReactReduxContext } from "react-redux";
import MasterPage from "../../components/MasterPage/index.js";
import { validarFormulario } from "../../lib/ValidacaoForm.js";
import LoginService from "../../services/LoginService.js";
import { VeiculosThunkActions } from "../../store/veiculos/index.js";

export default function CadastroPage()
{
    const { store } = useContext(ReactReduxContext);
    const [msgErro, setErro] = useState('');

    useEffect(() => {

        store.subscribe(() => {
            setErro(store.getState().veiculos.erroCadastro)
        });

    }, [store]);

    const cadastroHandler = async (event) => {
        event.preventDefault();
        const campos = Array.from(event.target.elements).filter(campo => campo.name !== '');
        
        if (validarFormulario(campos))
        {
            const token = LoginService.getToken();
            const dadosCadastro = new FormData(event.target);
            dadosCadastro.append('token', token);

            store.dispatch(VeiculosThunkActions.adicionaVeiculo(dadosCadastro));
        }
    }

    return (
        <MasterPage title="Cadastrar Veículo">
            { msgErro && <div className="alert alert-danger">{msgErro}</div>}
            <form onSubmit={cadastroHandler} id="formVeiculo" method="POST" className="row">
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
                    <input data-msg="Modelo é obrigatório!" type="text" name="modelo" className="form-control" defaultValue="" placeholder="Insira o nome do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Modelo inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Ano:</label>
                    <input type="number" data-msg="Ano é obrigatório!" name="ano" className="form-control" defaultValue="" placeholder="Insira o ano do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Ano inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Preço:</label>
                    <input type="text" data-msg="Preço é obrigatório!" name="preco" className="form-control" defaultValue="" placeholder="Insira o preço do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Preço inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Foto:</label>
                    <input type="text" name="foto" className="form-control" defaultValue="" placeholder="Insira o nome da foto" />
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
                    <textarea data-msg="Descrição é obrigatório!" className="form-control" name="descricao" rows="10" placeholder="Insira a descrição do veículo"></textarea>
                    <div className="alert-danger w-100 p-2 d-none">Descrição é obrigatório</div>
                </div>
                <div className="form-group col-md-12 text-right">
                    <button className="btn btn-primary">
                        Cadastrar Veículo
                    </button>
                    <button type="reset" className="btn btn-secondary">
                        Limpar
                    </button>
                </div>
            </form>
        </MasterPage>
    );
}