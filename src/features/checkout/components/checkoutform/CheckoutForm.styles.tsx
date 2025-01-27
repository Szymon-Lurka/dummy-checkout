import styled from "styled-components";

const FormWrapper = styled.div`
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const FormContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--color-background-gray);
`;

const StyledHeading = styled.h2`
    margin: 1rem 0 2rem;
    font-size: 20px;
    font-weight: 500;
    color: var(--color-text-black);
`;

export {
  FormWrapper,
  FormContent,
  ButtonContainer,
  StyledHeading,
}