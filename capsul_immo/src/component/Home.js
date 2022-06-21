import React, {useEffect} from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css';
import '../styles/Home.css'

import home1 from '../assets/Group 9.png'
import shadow from '../assets/Ellipse.png'
import line1 from '../assets/Vector 10.png'
import line2 from '../assets/Vector 11.png'
import capsul from '../assets/capsul.png'

import Shadow from './Shadow'


function Home() {

    useEffect(() => {
        Aos.init({duration: 3000})
    },[]);

    return (
        <div className='home'>
            <div className='home-wrapper'>
                <Shadow src={shadow} className='img-shadow1'/>
                <div className='home-description'>
                    <div className='home-description-text'>
                        <Shadow src={shadow} className='img-shadow-hide1'/>
                        <div className='home-title'>
                            l’agence de marketing évènementiel qui accompagne les promoteurs immobiliers,
                        </div>
                        <div className='home-sub-title'>
                            pour bâtir de solides opés !
                        </div>
                        <div className='home-descrition-info'>
                            <p>
                                L’accompagnement des promoteurs immobiliers dans leur transition digitale est fondamental, au sein du « monde d’après ».
                                Car aux nouvelles envies d’espace, de volumes et de voisinages conviviaux se conjuguent celles d’expérimenter d’innovantes façons de visiter, rencontrer, découvrir, consommer…  
                            </p>
                            <p>
                                Le marketing immersif s’impose comme un outil indispensable dans ce secteur florissant, et les technologies qui y sont associées,
                                comme la réalité virtuelle, trouvent donc naturellement leur place au cœur de notre Capsul. 
                            </p>
                            <p>
                                Du dispositif mobile aux packs conçus pour votre domaine d’activité :
                                les opérations imaginées par notre agence de marketing évènementiel et immersif sortent forcément de l’ordinaire. 
                            </p>
                        </div>
                    </div>
                    <div
                        className='home-description-pic'
                    >
                        <img
                            src={home1}
                            alt="Home for hiring"
                        />
                    </div>
                </div>
                <div className='sepatator'>
                    <div className='line'>
                        <img 
                            src={line1}
                            alt='line'
                        /> 
                    </div>
                    <Shadow src={shadow} className='img-shadow2' />
                </div>
                <div className='home-card'>
                    <div className='home-card-wrapper'>
                        <div className='card-title'>
                            <i className="fa-solid fa-3"></i>
                            <div className='card-title-text'>
                                <div>
                                    défis des promoteurs immobiliers
                                </div>
                                <p>
                                    que l’agence de marketing évènementiel Capsul Events relève haut la main
                                </p>
                            </div>
                        </div>
                        <div className='card-items'>
                            <div className='card-item'>
                                <i className="fa-solid fa-1"></i>
                                <p>Les futurs acquéreurs les plus jeunes sont de plus en plus nombreux à se dire prêts à acheter un bien visité 100% virtuellement :
                                    la réalité augmentée, intégrée à un espace promotionnel cosy, est une alternative attractive à la visite in situ.</p>
                            </div>
                            <div className='card-item'>
                                <i className="fa-solid fa-2"></i>
                                <p>La mise en abyme des territoires et des biens représentés prend une tout autre dimension grâce aux technologies immersives embarquées.
                                    La Capsul associe directement auprès de vos cibles ces outils innovants à votre nouvelle notoriété. </p>
                            </div>
                            <div className='card-item'>
                                <i className="fa-solid fa-3"></i>
                                <p>L’écosystème digital qui englobe la Capsul permet de garder facilement le contact avec les visiteurs,
                                    pour leur proposer d’autres offres ou biens immobiliers, même après l’opé. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sepatator'>
                    <div className='line1'>
                        <img 
                            src={line2}
                            alt='line 1'
                        /> 
                    </div>
                    <Shadow src={capsul} className='img-car' />
                </div>
            </div>
        </div>
    )
}

export default Home