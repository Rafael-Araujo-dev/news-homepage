import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import MenuSVG from '@public/icon-menu.svg'
import MenuCloseSVG from '@public/icon-menu-close.svg'

import {
    Container,
    Wrapper,
    Logo,
    NavDesktop,
    MenuOpen,
    MenuMobile,
    MenuWrapper,
    MenuClose
} from './styles'

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)

    const handleMenuMobile = () => {
        isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true)
    }

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

                {props.navLinks.length > 0 &&
                    <>
                        <NavDesktop>
                            {props.navLinks.map(
                                    (link, index) => (
                                        <li key={index}>
                                            <Link href={link.url} passHref>{link.text}</Link>
                                        </li>
                                    )
                            )}
                        </NavDesktop>

                        <MenuOpen
                            onClick={handleMenuMobile}
                        >
                            <Image
                                src={MenuSVG.src}
                                alt='Ícone menu'
                                fill
                            />
                        </MenuOpen>
                    </>
                }
            </Wrapper>

            <MenuMobile className={isMenuActive ? 'open' : 'closed'}>
                <MenuWrapper className={isMenuActive ? 'open' : 'closed'}>
                    <MenuClose
                        onClick={handleMenuMobile}
                    >
                        <Image
                            src={MenuCloseSVG.src}
                            alt='Ícone fechar menu'
                            fill
                        />
                    </MenuClose>
                    <ul>
                        {props.navLinks.map(
                                (link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} passHref>{link.text}</Link>
                                    </li>
                                )
                        )}
                    </ul>
                </MenuWrapper>
            </MenuMobile>
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