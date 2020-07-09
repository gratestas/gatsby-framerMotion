import React from 'react'
import { Container, Flex } from '../styles/globalStyles'
import { Instagram, Facebook, Vimeo } from '../assets/svg/social-icons'
import { FooterNav, FooterContent, FooterSocial } from '../styles/footerStyles'

const Footer = ({onCursor}) => {
    return (
        <FooterNav>
            <Container>
                <Flex spacebetween>
                    <FooterContent>
                        <p>902.315.1234</p>
                        <p>info@furrow.studio</p>
                    </FooterContent>
                    <FooterContent wider>
                        <p>15 cam at UNit B</p>
                        <p>University, PE C32 0E2</p>
                    </FooterContent>
                    <FooterSocial>
                        <a onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} href=''>
                            <Instagram />
                        </a>
                        <a onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} href=''>
                            <Facebook />
                        </a>
                        <a onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} href=''>
                            <Vimeo />
                        </a>
                    </FooterSocial>
                </Flex>
            </Container>
        </FooterNav>
    )
}

export default Footer;