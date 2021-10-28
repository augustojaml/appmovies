import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 14.31rem;
  height: 21.25rem;
  position: relative;

  > div.background {
    position: absolute;
    background: ${({ theme }) => rgba(theme.colors.dark500, 0.7)};
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    .content {
      height: auto;
      width: 100%;
      padding: 0.5rem;
      color: #fff;
      footer {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        font-weight: 700;
        div {
          display: flex;
          align-items: center;
          svg {
            margin-right: 0.5rem;
            color: ${({ theme }) => theme.colors.other500};
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    width: 10rem;
    height: 12.27rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
