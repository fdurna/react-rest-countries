import styled from 'styled-components'
import { Pagination } from "antd";

export const PaginationStyled = styled(Pagination)`
    margin-top: 30px;
    .ant-pagination-prev, ant-pagination-next {
        button {
            span {
                svg {
                    color: ${({ theme }) => theme.text} !important;
                }
            }
        }
    }
    .ant-pagination-item {
        &.ant-pagination-item-active {
            border-color: #d5d5d5;
            a {
                color: black;
            }
        }
        a {

        }
    }
`