import styled from "styled-components"
import { livros } from "./ultimosLancamentos"
import { Titulo } from '../Titulo'
import livro from '../../images/livro2.png'
import CardRecomenda from "../CardRecomenda"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img {
        width: 300px;
    }
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo ="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma google"
                img={livro}        
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos