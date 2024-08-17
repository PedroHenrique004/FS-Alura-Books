import styled from 'styled-components';

import Pesquisa from './components/Pesquisa';
import Header from './components/Header';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 100%) ;

  li {
    list-style: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
