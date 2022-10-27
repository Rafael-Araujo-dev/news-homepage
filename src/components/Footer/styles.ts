import styled from 'styled-components'
import colors from '@styles/colors.json'

export const Container = styled.footer`
    background-color: ${colors.neutral300};
    margin-top: 20px;
    padding: 10px 5%;
    font-family: 'Inter', sans-serif;
    font-size: .9rem;
    font-weight: 400;
    text-align: center;

    strong {
        color: red;
    }

    a {
        text-decoration: underline;
    }
`