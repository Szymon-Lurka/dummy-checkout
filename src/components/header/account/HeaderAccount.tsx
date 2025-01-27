import { useState } from 'react';
import ChevronIcon from '../../../assets/icons/chevron-down.svg';
import { AccountButton, AccountWrapper, DropdownMenu, MenuItem, StyledChevron } from './HeaderAccount.styles.tsx';

function HeaderAccount() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccountWrapper onMouseLeave={() => setIsOpen(false)}>
      <AccountButton
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        Account
        <StyledChevron
          src={ChevronIcon}
          alt=""
          $isOpen={isOpen}
        />
      </AccountButton>

      <DropdownMenu $isOpen={isOpen}>
        <MenuItem to="/account/profile">Profile</MenuItem>
        <MenuItem to="/account/orders">Orders</MenuItem>
        <MenuItem to="/account/settings">Settings</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </DropdownMenu>
    </AccountWrapper>
  );
}

export default HeaderAccount;