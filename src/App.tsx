import React from 'react';
import styled from 'styled-components';
import Routers from './Routers';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
      <Routers />
    </Wrapper>
  );
}

export default App;
