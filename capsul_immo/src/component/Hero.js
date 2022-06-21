import React from 'react'
import '../styles/Hero.css'

function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='hero-wrapper'>
                    <div className='hero-text'>
                        L’agence de marketing évènementiel qui fait décoller votre activité de
                        <span className='hero-title'>promoteur immobilier</span>
                    </div>
                    <p className='hero-info'>
                       Une Capsul + des innovations hi-tech le cocktail parfait pour (re)faire parler de vous !
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero