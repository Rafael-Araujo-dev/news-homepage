import Image from 'next/image'
import Link from 'next/link'

import {
    Container,
    Wrapper,
    Featured
} from './styles'

const Hero = () => {
    return (
        <Container>
            <Wrapper>

                <Featured>
                    <div>
                        <Image className='desk' src="/image-web-3-desktop.jpg" fill alt="" />
                        <Image className='mobile' src="/image-web-3-mobile.jpg" fill alt="" />
                    </div>

                    <div className='content'>
                        <h3>The Bright Future of Web 3.0?</h3>
                        <div>
                            <p>We dive into the next evolution of the web that claims to put the power of the plataforms back into the hands of the people. But is it really fullfilling its promise?</p>
                            <Link href='#read-more' passHref>Read More</Link>
                        </div>
                    </div>
                </Featured>

            </Wrapper>
        </Container>
    )
}

export default Hero