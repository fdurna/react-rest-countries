import styled from 'styled-components'

export const DetailsStyled = styled.div`
    padding-top: 20px;
    background: ${({ theme }) => theme.lBackground};
    .flag {
        img {

        }
    }
    .info {
        margin-left: 50px;
        .ant-typography {
            margin-bottom: 25px;
            color: ${({ theme }) => theme.text};
        }
        .list {
            ul {
                li {
                    display: flex;
                    margin-bottom: 12px;
                    span {
                        font-size: 16px;
                        color: ${({ theme }) => theme.text};
                        &.strong {
                            display: block;
                            font-weight: bold;
                            margin-right: 10px;
                        }
                        &.normal {
                        }
                    }
                }
            }
        }
        .borders {
            margin-bottom: 15px;
            .ant-typography {

            }
            .buttons {
                .ant-btn {
                    margin-right: 5px;
                }
            }
        }
    }
`