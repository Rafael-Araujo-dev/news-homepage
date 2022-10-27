import Link from 'next/link'

import { Container } from './styles'

const Footer = () => {

    return (
        <Container>
            <div>
                <span>Made with <strong>❤</strong> by <Link href="https://github.com/Rafael-Araujo-dev" target="_blank">Rafael Araujo</Link></span>
            </div>
        </Container>
    )
}

export default Footer