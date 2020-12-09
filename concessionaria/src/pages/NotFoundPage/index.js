import MasterPage from "../../components/MasterPage/index.js";


export default function NotFoundPage()
{
    return (
        <MasterPage>
            <section className="card">
                <header className="card-header p-3">
                    <h2>Página não encontrada | Erro 404</h2>
                </header>
                <div className="card-body p-3">
                    <p>A url que você tentou acessar não existe neste site :/</p>
                </div>
            </section>
        </MasterPage>
    );
}