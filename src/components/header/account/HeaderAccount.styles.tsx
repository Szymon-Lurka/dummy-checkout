import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AccountWrapper = styled.div`
  position: relative;
`;

const AccountButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledChevron = styled.img<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.2s ease;
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 200px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: ${props => props.$isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: #f5f5f5;
  }
`;

export {
  AccountWrapper,
  AccountButton,
  StyledChevron,
  DropdownMenu,
  MenuItem
}