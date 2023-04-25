import React from 'react'
import './_aboutScreen.scss'
import Footer from '../../components/footer/Footer'

const AboutScreen = () => {
    return (
        <div className='boox'>
            <h1 className='heading'>About PlayStream</h1>
            <hr className='break' />

            <p className='content'>Our mission is to give everyone a voice and show them the world.</p>
            <p className='content'>We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories.</p>


            <h2 className='main-head'>A Video Experience Like No Other</h2>
            <hr className='break' />
            <div className='section'>
                <div className='heads'>
                    <p className='data'><span>Seamless Video Playback -</span>
                        Our adaptive video streaming technology ensures that the best possible video quality is played back automatically based on the available bandwidth, therefore making it a great video experience on both mobile networks as well as WiFi internet connections. Our video is optimized to play on mobile networks with inconsistent throughput so that our users don't have to compromise on their experience on the low end, and play HD quality video on the top end of bandwidth availability. Additionally, our users can manually select the quality of video that suits their taste.</p>
                </div>

                <div className='heads'>
                    <p className='data'><span>Smart Search -</span>
                        Content search on PlayStream has been optimized to reduce complexity and delay in accessing content. Accurate search results, with lightning fast autocomplete suggestions navigate users to video with minimal navigation friction and ease of use.</p>
                </div>

                <div className='heads'>
                    <p className='data'><span>Friendly User Interface -</span>
                        Content organization on PlayStream is a result of a thoughtful user experience approach and strong design principles that ensure that the user is not overwhelmed with the breadth of content available. Using a mix of algorithms and human curation, users at any stage of their interaction with PlayStream will discover content and see their experience evolve with their interaction patterns over time.</p>
                </div>

                <div className='heads'>
                    <p className='data'><span>Originals -</span>
                        In our endeavour to drive meaningful engagement with our audience, PlayStream is investing in generating content keeping in mind the sentiments and attitudes of our consumers and has enjoyed great success with original programming content such as On Air with AIB, M Bole Toh, One Tip One Hand.</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutScreen
