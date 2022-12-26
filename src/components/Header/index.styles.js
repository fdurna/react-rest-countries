import styled from 'styled-components'

export const HeaderStyled = styled.header`
    background: ${({ theme }) => theme.background};
    .ant-typography {
        color: ${({ theme }) => theme.text};
    }
    .ant-btn {
        svg {
            margin-right: 5px;
            color: ${({ theme }) => theme.text};
        }
        span {
            color: ${({ theme }) => theme.text};
        }
    }
`