import Image from 'next/image'
import Link from 'next/link'

import {
    Container,
    Wrapper,
    Logo,
    NavDesktop
} from './styles'

const Header = () => {
    return (
        <Container>
            <Wrapper>
                
                <Logo>
                    <Image
                        src={props.logo.src}
                        alt={props.logo.alt}
                        fill
                    />
                </Logo>

                {
                    props.navLinks.length > 0 &&
                    <NavDesktop>
                        {props.navLinks.map(
                                (link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} passHref>{link.text}</Link>
                                    </li>
                                )
                        )}
                    </NavDesktop>
                }

            </Wrapper>
        </Container>
    )
}

export default Header

const props = {
    logo: {
        src: '/logo.svg',
        alt: 'Logotipo'
    },
    navLinks: [
        {
            'text': 'Home',
            'url': '#home'
        },
        {
            'text': 'New',
            'url': '#new'
        },
        {
            'text': 'Popular',
            'url': '#popular'
        },
        {
            'text': 'Trending',
            'url': '#trending'
        },
        {
            'text': 'Categories',
            'url': '#categories'
        },
    ]
}