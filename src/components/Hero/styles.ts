import styled from 'styled-components'
import colors from '@styles/colors.json'

export const Container = styled.section`
    padding: 40px 5%;
`

export const Wrapper = styled.div`
    max-width: 1240px;
    margin: auto;
`

export const Featured = styled.div`
    @media (min-width: 1024px) {
        width: 70%;
    }
    img {
        position: relative !important;
        object-fit: contain !important;

        @media (max-width: 768px) {
            &.desk { display: none; }
        }
        @media (min-width: 768px) {
            &.mobile { display: none; }
        }
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
        column-gap: 10px;

        h3 {
            font-family: 'Inter', sans-serif;
            font-size: 4.5rem;
            font-weight: 700;
            margin: 0;
            line-height: 4.25rem;
        }

        p {
            color: ${colors.neutral700};
            font-family: 'Inter', sans-serif;
            font-size: 1.25rem;
            line-height: 2.2rem;
            margin: 0 0 40px 0;
        }

        a {
            background-color: ${colors.primary800};
            border: none;
            outline: none;
            padding: 15px 25px;
            text-transform: uppercase;

            color: ${colors.neutral100};
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.2rem;
            
            cursor: pointer;

            transition: background-color .2s ease-out;
            &:hover {
                background-color: ${colors.neutral900};
            }
        }

        @media (max-width: 767px) {
            grid-template-columns: 1fr;

            h3 {
                font-size: 3rem;
                line-height: 3rem;
            }

            p {
                margin-top: 10px;
            }
        }
    }

`