import React from 'react'
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About, Services, AccordionHeader, AccordionIcon, AccordionContent } from '../../styles/homeStyles'

import data from './services.data'

const HomeAbout = () => {
    return (
        <HomeAboutSection>
            <Container>
                <Flex alignTop>
                    <About>
                        <h2>
                            Furrow is an integrated, full-service creative studio offering
                            v ideo production, creative development, and post-production services.
                        </h2>
                        <p>
                            Everybody's got a story. And we don't stop until we've uncovered what
                            makes yours worth telling. Whether it's working directly with you, an
                            agency partner, or putting the finishing touches on something special,
                            we're ready to dig in and get our hands dirty-Are you?
                        </p>
                    </About>
                    <Services>
                        <h3>Services</h3>
                        {data.map((details, index) => (
                            <Accordion key={index} details={details} />
                        ))}
                    </Services>
                </Flex>
            </Container>
        </HomeAboutSection>
    )
}

const Accordion = ({ details }) => {
    return (
        <React.Fragment>
            <AccordionHeader>
                <AccordionIcon>
                    <span></span>
                    <span></span>
                </AccordionIcon>
                {details.title}
            </AccordionHeader>
            <AccordionContent>
                {details.results.map((result, index) => (
                    <span key={index}>{result}</span>
               ))}
            </AccordionContent>
        </React.Fragment>
    )
}

export default HomeAbout;
