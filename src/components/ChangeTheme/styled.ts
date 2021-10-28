import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dark300};
  width: 45px;
  height: 22px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  position: relative;
  margin-left: 1rem;
  span {
    font-size: 0.9rem;
  }
  div {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.dark700};
    position: absolute;
    top: 1px;
    cursor: pointer;
    transition: transform 0.3s linear;
    &.active {
      transform: translateX(110%);
    }
  }
`;
