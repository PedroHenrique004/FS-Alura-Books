import Input from "../Input";

import styled from "styled-components";
import { useState } from "react";
import { livros } from './dadosPesquisa'


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`


function Pesquisa() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                type="text" 
                placeholder="Digite sua próxima leitura" 
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map(livro => (
                <>
                    <p>{livro.nome}</p>
                    <img src={livro.src}></img>
                </>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;