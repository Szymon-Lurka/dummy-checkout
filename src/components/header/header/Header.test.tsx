import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header.tsx';
import { describe, it, expect } from 'vitest';
describe('Header', () => {
    it('renders all header components', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        // Navigation links
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Shop')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
        expect(screen.getByText('Help')).toBeInTheDocument();

        // Account and Cart
        expect(screen.getByText('Account')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /cart/i })).toBeInTheDocument();
    });

    it('displays correct cart count', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText('3')).toBeInTheDocument(); // Sprawdza licznik koszyka
    });
});