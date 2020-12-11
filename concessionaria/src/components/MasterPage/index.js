import Cabecalho from "../Cabecalho/index.js"
import Container from "../Container/index.js"
import Menu from "../Menu/index.js"
import Rodape from "../Rodape/index.js"
import Helmet from 'react-helmet';

export default function MasterPage(props)
{
    return (
        <Container>
            <Helmet>
                <title>Concessionária - {`${props.title}`}</title>
            </Helmet>
            <Cabecalho />
            <Menu />
            { props.children }
            <Rodape />
        </Container>
    )
}