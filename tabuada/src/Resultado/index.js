export default function Resultado(props)
{
    const renderResultado = () => {
        if (!props.valor) {
            return props.mensagem;
        }
        
        let resultados = [];

        for (let i = 1; i <= 10; i++)
        {
            resultados.push(
                <p key={i}>
                    {props.valor} x {i} = {props.valor * i}
                </p>
            );
        }

        return resultados;
    }

    return (
        <div className="card">
            <h3 className="card-header">Resultado:</h3>
            <div className="card-body p-3">
                { renderResultado() }
            </div>
        </div>
    );
}