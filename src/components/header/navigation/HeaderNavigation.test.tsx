import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderNavigation from './HeaderNavigation.tsx';
import { describe, it, expect } from 'vitest';

describe('HeaderNavigation', () => {
    it('renders all navigation items', () => {
        render(
            <BrowserRouter>
                <HeaderNavigation />
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Shop')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
        expect(screen.getByText('Help')).toBeInTheDocument();
    });

    it('renders links with correct paths', () => {
        render(
            <BrowserRouter>
                <HeaderNavigation />
            </BrowserRouter>
        );

        expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
        expect(screen.getByText('Shop').closest('a')).toHaveAttribute('href', '/shop');
        expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
        expect(screen.getByText('Help').closest('a')).toHaveAttribute('href', '/help');
    });
});