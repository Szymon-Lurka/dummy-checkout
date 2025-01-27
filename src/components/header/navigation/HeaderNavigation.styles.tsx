import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #4a5568;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  transition: color 0.2s ease;
  font-weight: 500;

  &:hover {
    color: #666;
  }
`;

export { Nav, NavLink };
