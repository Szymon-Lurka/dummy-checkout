import { Outlet } from 'react-router-dom';
import Header from '../header/header/Header.tsx';
import { Main, StyledAppLayout } from './AppLayout.styles.tsx';

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
