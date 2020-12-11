import MasterPage from "../../components/MasterPage/index.js";
import { validarFormulario } from "../../lib/ValidacaoForm.js";

export default function EditarPage()
{
    const editarHandler = (event) => {
        event.preventDefault();
        const campos = Array.from(event.target.elements).filter(campo => campo.name !== '');

        if (validarFormulario(campos))
        {
            // envia as informações pro servidor
        }
    }

    return (
        <MasterPage title="Editar Veículo">
            <form onSubmit={editarHandler} id="formVeiculo" method="POST" className="row">
                <div className="form-group col-md-6">
                    <label>Marca:</label>
                    <select name="marca" className="form-control custom-select">
                        <option value="">-- Selecionar --</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                        <option value="Hyiundai">Hyiundai</option>
                    </select>
                    <div className="alert-danger w-100 p-2 d-none">Marca é obrigatório</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Modelo:</label>
                    <input type="text" name="modelo" className="form-control" value="" placeholder="Insira o nome do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Modelo inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Ano:</label>
                    <input type="number" name="ano" className="form-control" value="" placeholder="Insira o ano do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Ano inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Preço:</label>
                    <input type="text" name="preco" className="form-control" value="" placeholder="Insira o preço do modelo" />
                    <div className="alert-danger w-100 p-2 d-none">Preço inválido</div>
                </div>
                <div className="form-group col-md-6">
                    <label>Foto:</label>
                    <input type="text" name="foto" className="form-control" value="" placeholder="Insira o nome da foto" />
                </div>
                <div className="form-group col-md-6">
                    <label>Cor:</label>
                    <select name="cor" className="form-control custom-select">
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
                    <textarea className="form-control" name="descricao" rows="10" placeholder="Insira a descrição do veículo"></textarea>
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