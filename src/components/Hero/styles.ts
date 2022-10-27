import styled from 'styled-components'
import colors from '@styles/colors.json'

export const Container = styled.section`
    padding: 0px 5% 20px 5%;
    @media (min-width: 768px) {
        padding: 40px 5%;
    }
`

export const Wrapper = styled.div`
    max-width: 1240px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;

    @media (min-width: 1024px) {
        grid-template-columns: .68fr .29fr;
    }
`

export const Featured = styled.div`
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
            font-size: 4.3rem;
            font-weight: 700;
            margin: 0;
            line-height: 4rem;
        }

        p {
            color: ${colors.neutral700};
            font-family: 'Inter', sans-serif;
            font-size: 1.2rem;
            line-height: 1.7rem;
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

export const Latest = styled.aside`
    margin-top: 60px;
    background-color: ${colors.neutral900};
    padding: 30px 20px;
    @media (min-width: 1024px) {
        margin-top: 0;
    }

    h4 {
        margin: 0;
        color: ${colors.primary300};
        font-family: 'Inter', sans-serif;
        font-size: 2.5rem;
    }

    div {
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        &:hover {
                h5 { color: ${colors.primary300}; }
        }
        h5 {
            color: ${colors.neutral100};
            font-size: 1.25rem;
            margin-bottom: 0;

            transition: color .2s ease-out;
        }
        p {
            color: ${colors.neutral300};
            font-size: 1.1rem;
            line-height: 2rem;
            margin: 10px 0 0 0;
        }
    }

    hr {
        margin: 30px 0;
    }
`