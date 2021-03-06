import { Link } from "react-router-dom";

export default function Menu()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/listagem">Listagem</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastro">Cadastro</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}