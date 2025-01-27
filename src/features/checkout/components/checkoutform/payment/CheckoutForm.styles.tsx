import { styled } from "styled-components";

const ExpirationCVCWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-grow: 1;
`;

const ExpirationWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1;

    &::after {
        content: '/';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--color-text-muted);
        pointer-events: none;
    }
`;

export {
    ExpirationCVCWrapper,
    ExpirationWrapper
}