import Image from 'next/image'
import Link from 'next/link'

import {
    Container,
    Wrapper,
    Card
} from './styles'

const NewsGrid = () => {
    return (
        <Container>
            <Wrapper>
                <Link href="#reviving-retro-pcs" passHref>
                    <Card>
                        <div className="thumbnail">
                            <Image src="/image-retro-pcs.jpg" fill alt="" />
                        </div>
                        <div className="content">
                            <div>01</div>
                            <h5>Reviving Retro PCs</h5>
                            <p>What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </Card>
                </Link>

                <Link href="#top-10-laptops-of-2022" passHref>    
                    <Card>
                        <div className="thumbnail">
                            <Image src="/image-top-laptops.jpg" fill alt="" />
                        </div>
                        <div className="content">
                            <div>02</div>
                            <h5>Top 10 Laptops of 2022</h5>
                            <p>Our best picks for various needs and budgets</p>
                        </div>
                    </Card>
                </Link>
                
                <Link href="#the-growth-of-gaming" passHref>
                    <Card>
                        <div className="thumbnail">
                            <Image src="/image-gaming-growth.jpg" fill alt="" />
                        </div>
                        <div className="content">
                            <div>03</div>
                            <h5>The Growth of Gaming</h5>
                            <p>How the pandemic has sparked fresh opportunities</p>
                        </div>
                    </Card>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default NewsGrid