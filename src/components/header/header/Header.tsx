import Logo from '../../logo/Logo.tsx';
import HeaderNavigation from '../navigation/HeaderNavigation.tsx';
import HeaderAccount from '../account/HeaderAccount.tsx';
import HeaderCart from '../cart/HeaderCart.tsx';
import { LeftSection, RightSection, StyledHeader } from './Header.styles.tsx';


function Header() {
    return (
        <StyledHeader>
            <LeftSection>
                <Logo />
                <HeaderNavigation />
            </LeftSection>

            <RightSection>
                <HeaderAccount />
                <HeaderCart itemCount={3} />
            </RightSection>
        </StyledHeader>
    );
}

export default Header;