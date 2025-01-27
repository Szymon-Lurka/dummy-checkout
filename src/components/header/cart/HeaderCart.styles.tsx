import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
`;

const StyledCartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export {
  CartWrapper,
  StyledCartIcon
}