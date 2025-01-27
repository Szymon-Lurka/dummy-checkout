import { styled } from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

const StyledLabel = styled.p`
    font-weight: 500;
    color: var(--color-text-dark);
    flex-basis: 40%;
`;

export {
  StyledWrapper,
  StyledLabel
}
