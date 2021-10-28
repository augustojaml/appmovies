import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark500};
  padding: 1.1875rem 2rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  transition: background 200ms;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.dark400};
  }

  @media (max-width: 720px) {
    width: 80px;
    span {
      display: none;
    }
  }
`;
