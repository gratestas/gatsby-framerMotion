import React, { useState } from 'react'
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About, Services, AccordionHeader, AccordionIcon, AccordionContent } from '../../styles/homeStyles'
import { motion } from 'framer-motion'

import data from './services.data'

const HomeAbout = ({onCursor}) => {
    const [expanded, setExpended] = useState(0)
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
                            <Accordion
                                key={index}
                                details={details}
                                expanded={expanded}
                                setExpended={setExpended}
                                onCursor={onCursor}
                            />
                        ))}
                    </Services>
                </Flex>
            </Container>
        </HomeAboutSection>
    )
}

const Accordion = ({ details, expanded, setExpended,onCursor }) => {
    const isOpen = details.id === expanded;
    return (
        <React.Fragment>
            <AccordionHeader
                onClick={() => setExpended(isOpen ? false : details.id)} onMouseEnter={()=>onCursor('hovered')} onMouseLeave={onCursor}
            >
                <AccordionIcon>
                    <motion.span
                        animate={{ rotate: isOpen ? 0 : 45, x: 3 }}
                        transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                    ></motion.span>
                    <motion.span
                        animate={{ rotate: isOpen ? 0 : -45, x: -3 }}
                        transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                    ></motion.span>
                </AccordionIcon>
                {details.title}
            </AccordionHeader>
            <AccordionContent
                key='content'
                animate={{ height: isOpen ? '100%' : '0' }}
                transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
                {details.results.map((result, index) => (
                    <span key={index}>{result}</span>
                ))}
            </AccordionContent>
        </React.Fragment>
    )
}

export default HomeAbout;
