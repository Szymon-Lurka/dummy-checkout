import CartIcon from '../../../assets/icons/cart-icon.svg';
import { CartWrapper, StyledCartIcon } from './HeaderCart.styles.tsx';

interface HeaderCartProps {
    itemCount: number;
}

function HeaderCart({ itemCount = 0 }: HeaderCartProps) {
    return (
        <CartWrapper to="/cart" data-testid="cart-icon">
            <StyledCartIcon src={CartIcon} alt="Shopping cart" />
            {itemCount > 0 && `${itemCount} items`}
        </CartWrapper>
    );
}

export default HeaderCart;
