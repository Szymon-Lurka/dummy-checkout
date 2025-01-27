import { styled } from "styled-components";

const FormSelect = styled.select`
    width: 100%;
    padding: 1rem;
    padding-right: 3rem;
    border: none;
    border-radius: 0.75rem;
    appearance: none;
    background-color:  var(--color-background-gray);
    background-image: url("/src/assets/icons/chevron-down.svg");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    font-size: 1rem;
    cursor: pointer;
`;

export default FormSelect;