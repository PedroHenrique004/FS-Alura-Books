import styled from 'styled-components';

import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
  
const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    min-width: 120px;
    cursor: pointer;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`


function HeaderOptions() {

    const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
    const icones = [perfil, sacola]

    return (
        <>
            <Opcoes className='opcoes'>
            { textoOpcoes.map ( (texto) => (
                <Opcao className='opcao'><p>{texto}</p></Opcao>
            ))}
            </Opcoes>

            <Icones className='icones'>
                { icones.map ( (icone) => (
                <Icone className='icone'><img src={icone} alt='icone'></img></Icone>
            ))}
            </Icones>
        </>
    )
}

export default HeaderOptions;