import styled from 'styled-components'
import colors from '@styles/colors.json'

export const Container = styled.section`
    padding: 30px 5%;
`

export const Wrapper = styled.div`
    max-width: 1240px;
    margin: auto;

    display: grid;
    column-gap: 30px;
    row-gap: 20px;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const Card = styled.div`
    display: flex;
    column-gap: 20px;
    cursor: pointer;

    .thumbnail {
        max-width: 100px;
        width: 100%;
        img {
            position: relative !important;
            object-fit: contain !important;
        }
    }

    .content {
        font-family: 'Inter', sans-serif;

        div {
            color: ${colors.neutral300};
            font-size: 2rem;
            font-weight: 700;
        }

        h5 {
            font-size: 1.25rem;
            font-weight: 800;
            margin: 10px auto;
            color: ${colors.neutral900};
            transition: color .2s ease-out;
        }

        p {
            margin: 0;
            color: ${colors.neutral700};
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.5rem;
        }
    }

    &:hover {
        h5 {
            color: ${colors.primary800};
        }
    }
`