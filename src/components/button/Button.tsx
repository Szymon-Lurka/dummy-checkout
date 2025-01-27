import styled, { css } from 'styled-components';

type ButtonProps = {
    $type: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
    background: ${({ $type }) => $type === 'primary' ? 'var(--color-brand-primary)' : 'var(--color-brand-secondary)'};
    color: ${({ $type }) => $type === 'primary' ? 'var(--color-text-white)' : 'var(--color-text-gray-dark)'};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: background 0.3s ease;

    ${({ $type }) => $type === 'primary' && css`
    &:hover {
        background: var(--color-brand-primary-hover);
    }
    `}
`;

Button.defaultProps = {
    $type: 'primary'
};

export { Button };
