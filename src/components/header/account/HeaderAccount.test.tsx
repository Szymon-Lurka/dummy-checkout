import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderAccount from './HeaderAccount.tsx';
import { describe, it, expect } from 'vitest';
describe('HeaderAccount', () => {
    const setup = () => {
        return render(
            <BrowserRouter>
                <HeaderAccount />
            </BrowserRouter>
        );
    };

    it('renders account button', () => {
        setup();
        expect(screen.getByText('Account')).toBeInTheDocument();
    });

    it('shows dropdown menu on click', () => {
        setup();
        const button = screen.getByText('Account');

        fireEvent.click(button);

        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Orders')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    it('hides dropdown menu when mouse leaves', () => {
        setup();
        const wrapper = screen.getByText('Account').closest('div');

        fireEvent.click(screen.getByText('Account'));
        fireEvent.mouseLeave(wrapper!);

        expect(screen.queryByText('Profile')).not.toBeVisible();
    });
});