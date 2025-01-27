import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
      height: 100vh;
`;

const Main = styled.main`
padding: 4rem 4.8rem 0;
overflow: scroll;
max-width: 1400px;
margin: 0 auto;
`;

export {
  StyledAppLayout,
  Main
}
