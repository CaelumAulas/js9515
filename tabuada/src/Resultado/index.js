export default function Resultado(props)
{
    return (
        <div className="card">
            <h3 class="card-header">Resultado:</h3>
            <div class="card-body p-3">
                { props.mensagem }
            </div>
        </div>
    );
}