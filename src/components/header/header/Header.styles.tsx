import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 80px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 4rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 50%;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
`;

export {
  StyledHeader,
  LeftSection,
  RightSection
}
