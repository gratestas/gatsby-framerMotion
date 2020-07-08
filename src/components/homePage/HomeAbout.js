import React, { useState,useEffect } from 'react'
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About, Services, AccordionHeader, AccordionIcon, AccordionContent } from '../../styles/homeStyles'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import data from './services.data'
import { useGlobalStateContext } from '../../context/globalContext'

const HomeAbout = ({ onCursor }) => {
    const animation = useAnimation();
    const [aboutRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px' // requires 300px of scroll untill we reach the element
    });
    const [expanded, setExpended] = useState(0)

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [animation, inView])
    return (
        <HomeAboutSection
            ref={aboutRef}
            animate={animation}
            initial='hidden'
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] },
                },
                hidden: {
                    opacity: 0,
                    y: 100,
                },
            }}
        >
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

const Accordion = ({ details, expanded, setExpended, onCursor }) => {
    const isOpen = details.id === expanded;
    const [hovered, setHovered] = useState(false);
    const { currentTheme } = useGlobalStateContext();
    return (
        <React.Fragment>
            <AccordionHeader
                onClick={() => setExpended(isOpen ? false : details.id)}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor}
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
                whileHover={{
                    color: currentTheme === 'dark' ? '#ffffff' : '#000000'
                }}
            >
                <AccordionIcon>
                    <motion.span
                        animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
                        transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                    ></motion.span>
                    <motion.span
                        animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
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
