import { Link } from "react-router-dom";

export default function NotFoundPage(props) {
    let { location: { pathname } } = props;
    return(
        <div className="container">
            A URL <strong>{ pathname }</strong> não existe no Twitelum :/ <br />
            Se quiser voltar para a página inicial <Link to="/">clique aqui</Link>.
        </div>
    );
}