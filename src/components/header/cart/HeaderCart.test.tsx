import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderCart from './HeaderCart.tsx';
import { describe, it, expect } from 'vitest';

describe('HeaderCart', () => {
    it('renders cart icon', () => {
        render(
            <BrowserRouter>
                <HeaderCart itemCount={0} />
            </BrowserRouter>
        );

        expect(screen.getByRole('link')).toHaveAttribute('href', '/cart');
    });

    it('shows item count when items are present', () => {
        render(
            <BrowserRouter>
                <HeaderCart itemCount={3} />
            </BrowserRouter>
        );

        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('hides item count when no items', () => {
        render(
            <BrowserRouter>
                <HeaderCart itemCount={0} />
            </BrowserRouter>
        );

        expect(screen.queryByText('0')).not.toBeInTheDocument();
    });
});