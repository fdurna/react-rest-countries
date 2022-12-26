import styled from "styled-components";

export const CardStyled = styled.div`
  .card {
    cursor: pointer;
    background: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.lBackground};
      .ant-card-body {
        padding: 0;
        .image {
          min-height: 190px;
          img {
          }
        }
        .text {
          padding: 20px;
          color: ${({ theme }) => theme.text};
          .title {
            font-size: 18px;
            margin-bottom: 5px;
          }
          .item {
            span {
              &.l {
                font-weight: 600;
              }
              &.r {
                margin-left: 7px;
              }
            }
          }
        }
      }
  }
`;
