import React from 'react'

import { Banner, Video, BannerTitle, Canvas, Headline } from '../../styles/homeStyles'

const HomeBanner = () => {
    return (
        <Banner>
            <Video>
                <video
                    height='100%'
                    width='100%'
                    loop
                    autoPlay
                    src={require('../../assets/video/video.webm')}
                    preload='auto'
                />
            </Video>
            <Canvas>
                <BannerTitle>
                    <Headline>DIG</Headline>
                    <Headline>DEEP</Headline>
                </BannerTitle>
            </Canvas>
        </Banner>
    )
}

export default HomeBanner; 
