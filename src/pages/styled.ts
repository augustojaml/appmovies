import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  .sidebar {
    width: 100%;
    max-width: 24rem;
    background: ${({ theme }) => theme.colors.dark700};
    padding: 0 2rem;
    @media (max-width: 720px) {
      width: 10rem;
    }
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        width: 100%;
        text-align: center;
        &.desktop {
          @media (max-width: 720px) {
            display: none;
          }
        }
        &.mobile {
          @media (min-width: 720px) {
            display: none;
          }
        }
        strong {
          color: ${({ theme }) => theme.colors.other500};
        }
      }
    }
    ul {
      width: 100%;
      list-style: none;
    }
  }

  .container {
    flex: 1;
    .content {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 100%;
      header {
        padding-top: 0.8rem;
        h1 {
          strong {
            @media (max-width: 720px) {
              display: none;
            }
          }
          span {
            color: ${({ theme }) => theme.colors.other500};
          }
        }
      }
      section {
        width: 100%;
        max-height: calc(100% - 12rem);
        overflow: auto;
        display: grid;
        gap: 3rem;
        grid-template-columns: repeat(4, 1fr);
        @media (max-width: 1120px) {
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 720px) {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        &::-webkit-scrollbar {
          width: 10px;
        }
        &::-webkit-scrollbar-track {
          background: ${({ theme }) => theme.colors.dark100};
        }
        ::-webkit-scrollbar-thumb {
          background: ${({ theme }) => rgba(theme.colors.other500, 0.5)};
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${({ theme }) => theme.colors.other500};
        }
      }
    }
  }
`;
