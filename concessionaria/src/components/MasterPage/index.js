import Cabecalho from "../Cabecalho/index.js"
import Container from "../Container/index.js"
import Menu from "../Menu/index.js"
import Rodape from "../Rodape/index.js"


export default function MasterPage(props)
{
    return (
        <Container>
            <Cabecalho />
            <Menu />
            { props.children }
            <Rodape />
        </Container>
    )
}