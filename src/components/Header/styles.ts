import styled from 'styled-components'
import colors from '@styles/colors.json'

export const Container = styled.header`
    padding: 0px 5% 0 5%;

    @media (min-width: 768px) {
        padding: 60px 5% 0 5%;
    }
`

export const Wrapper = styled.div`
    max-width: 1240px;
    margin: auto;

    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`

export const Logo = styled.div`
    min-width: 40px;
    @media (min-width: 768px) {
        min-width: 65px;
    }
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
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    @media (max-width: 767px) {
        display: none;
    }
`

export const MenuOpen = styled.div`
    width: 40px;
    img {
        position: relative !important;
        object-fit: contain !important;
    }

    @media (min-width: 768px) {
        display: none;
    }
`

export const MenuMobile = styled.div`
    z-index: 100;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;

    transition: background-color .2s ease-in-out;
    &.open {
        transform: translateX(0%);
        background-color: rgba(0,0,0, 0.25);
    }
    &.closed {
        transform: translateX(100%);
        background-color: rgba(0,0,0, 0);
    }

    @media (min-width: 768px) {
        display: none;
    }
`

export const MenuWrapper = styled.div`
    transition: transform .2s ease-in-out;
    &.open {
        transform: translateX(0%);
    }
    &.closed {
        transform: translateX(100%);
    }

    background-color: ${colors.neutral100};
    height: 100%;
    width: 75%;
    right: 0;
    position: fixed;
    padding: 20px 20px;
    overflow-y: auto;

    ul {
        margin-top: 80px;
        padding: 0;
        list-style: none;
        width: 100%;

        font-family: 'Inter', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;

        color: ${colors.neutral700};

        li {
            margin: 20px 0;
            &:first-child {
                margin-top: 0;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

`
export const MenuClose = styled.div`
    width: 40px;
    img {
        position: relative !important;
        object-fit: contain !important;
    }
    float: right;
`