import Image from 'next/image'
import Link from 'next/link'

import {
    Container,
    Wrapper,
    Featured,
    Latest
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

                <Latest>
                    <h4>New</h4>

                    <Link href='#hydrogen-vs-eletric-cars' passHref>
                        <div>
                            <h5>Hydrogen VS Eletric Cars</h5>
                            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>
                    </Link>
                    <hr />
                    <Link href='#the-downsides-of-ai-artistry' passHref>
                        <div>
                            <h5>The Downsides of AI Artistry</h5>
                            <p>What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>
                    </Link>
                    <hr />
                    <Link href='#is-vc-funding-drying-up?' passHref>
                        <div>
                            <h5>IS VC Funding Drying Up?</h5>
                            <p>Private funding by VC firms is down 50% YOY. We take look at what that means.</p>
                        </div>
                    </Link>
                </Latest>

            </Wrapper>
        </Container>
    )
}

export default Hero