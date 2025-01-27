import { Nav, NavLink } from './HeaderNavigation.styles.tsx';


const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/contact', label: 'Contact' },
    { path: '/help', label: 'Help' },
];

function HeaderNavigation() {
    return (
        <Nav>
            {navigationItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                    {item.label}
                </NavLink>
            ))}
        </Nav>
    );
}

export default HeaderNavigation;
