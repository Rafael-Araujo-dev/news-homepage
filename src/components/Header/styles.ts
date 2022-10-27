import styled from 'styled-components'
import colors from '@styles/colors.json'

export const Container = styled.header`
    padding: 60px 5% 0 5%;
`

export const Wrapper = styled.div`
    max-width: 1240px;
    margin: auto;

    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`

export const Logo = styled.div`
    min-width: 65px;
    img {
        position: relative !important;
        object-fit: contain !important;
    }
`

export const NavDesktop = styled.ul`
    display: flex;
    list-style: none;
    
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;

    li {
        margin: 0 20px;

        transition: color .15s ease-out;
        color: ${colors.neutral700};
        &:hover {
            color: ${colors.primary800};
        }
    }
`