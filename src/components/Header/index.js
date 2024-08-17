import styled from 'styled-components';

import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header()  {
    return (
        <>
        <HeaderContainer>
            <Logo />
            <HeaderOptions />
        </HeaderContainer>
        </>
    )
}

export default Header;