import styled from 'styled-components'

export const MainStyled = styled.main`
    padding: 20px 0px 20px 0px;
    background: ${({ theme }) => theme.lBackground};
    .filter {
        
        .search {
        }
        .selects {
            display: flex;
            justify-content: end;
        }
    }
`