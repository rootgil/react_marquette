import React, {useEffect} from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css';
import '../styles/Home.css'

import home1 from '../assets/Group 9.png'
import home2 from '../assets/Group 10.png'
import shadow from '../assets/Ellipse.png'
import line1 from '../assets/Vector 10.png'
import line2 from '../assets/Vector 11.png'
import capsul from '../assets/capsul.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import hear from '../assets/hear_pod.png'

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
                                Du dispositif mobile aux packs conçus pour votre domaine d’activité :
                                les opérations imaginées par notre agence de marketing évènementiel et immersif sortent forcément de l’ordinaire. 
                            </p>
                        </div>
                    </div>
                    <div className='home-description-pic' data-aos="slide-left">
                        <img
                            src={home1}
                            alt="Home for hiring"
                        />
                    </div>
                </div>
                <div className='separator'>
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
                                    <i id="mobile-icon" className="fa-solid fa-3"></i>
                                    défis des promoteurs immobiliers
                                </div>
                                <p>
                                    que l’agence de marketing évènementiel Capsul Events relève haut la main
                                </p>
                            </div>
                        </div>
                        <div className='card-items'>
                            <Shadow src={shadow} className='img-shadow3'/>
                            <div className='card-item'>
                                <i className="fa-solid fa-1" data-aos="fade-in"></i>
                                <p>Les futurs acquéreurs les plus jeunes sont de plus en plus nombreux à se dire prêts à acheter un bien visité 100% virtuellement :
                                    la réalité augmentée, intégrée à un espace promotionnel cosy, est une alternative attractive à la visite in situ.</p>
                            </div>
                            <div className='card-item'>
                                <i className="fa-solid fa-2" data-aos="fade-in"></i>
                                <p>La mise en abyme des territoires et des biens représentés prend une tout autre dimension grâce aux technologies immersives embarquées.
                                    La Capsul associe directement auprès de vos cibles ces outils innovants à votre nouvelle notoriété. </p>
                            </div>
                            <Shadow src={shadow} className='img-shadow4'/>
                            <div className='card-item'>
                                <i className="fa-solid fa-3" data-aos="fade-in"></i>
                                <p>L’écosystème digital qui englobe la Capsul permet de garder facilement le contact avec les visiteurs,
                                    pour leur proposer d’autres offres ou biens immobiliers, même après l’opé. </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='car-part'>
                    <div className='img-car' data-aos="slide-right">
                        <img
                            src={capsul}
                            alt='shadow'
                        />
                    </div>
                    <div className='line1'>
                        <img 
                            src={line2}
                            alt='line 1'
                        /> 
                    </div>
                </div>
                <div className='home-desc'>
                    <Shadow src={shadow} className='img-shadow5' />
                    <div className='home-desc-text'>
                        <div className='home-desc-title'>
                            Une vision consumer centric pour des opé marketing qui font mouche
                        </div>
                        <div  className='home-desc-info'>
                            Chaque futur acquéreur a une histoire et des envies différentes : proposez-lui une vision de votre offre sur mesure qui saura l’embarquer. Contenu de marque adapté et à l’image de votre identité premium, supports basés sur des technologies immersives déclinées pour valoriser des biens soigneusement sélectionnés…
                            à chacun son expérience, dans la Capsul !  
                        </div>
                    </div>
                    <div  className='home-desc-img' data-aos="slide-left">
                        <img
                            src={home2}
                            alt="Home description"
                        />
                    </div>
                </div>
                <div className='separator'>
                    <div className='line2'>
                        <img 
                            src={line1}
                            alt='line2'
                        /> 
                    </div>
                    <Shadow src={shadow} className='img-shadow6' />
                </div>
                <div className='home-solution'>
                    <div className='home-solution-wrapper'>
                        <div className='home-solution-title'>
                            Des packs événementiels modulables et spécifiquement conçus pour les promoteurs immobiliers
                        </div>
                        <div className='home-solution-info'>
                            La promotion immobilière, ça ne s’improvise pas. Jetez un œil aux offres* dédiées à votre secteur d’activité, et imaginées par les experts Capsul Events : 
                        </div>
                        <div className='home-solution-desc'>
                            <div className='home-solution-d1'>
                                <div className='home-solution-im left'>
                                    <img 
                                        src={left}
                                        alt='left arrow'
                                    />
                                </div>
                                <div className='home-solution-item'>
                                    <div>
                                        GRAVITY
                                    </div> 
                                    <p>
                                        Votre nouveau programme immobilier sous les feux de la rampe… pendant 7 jours 
                                    </p>
                                </div>
                            </div>
                            <div className='home-solution-d2'>
                                <div className='home-solution-item'>
                                    <div>
                                        OVNI
                                    </div>
                                    <p>
                                        Votre présence d’1 journée à un salon professionnel ne passera pas inaperçue !  
                                    </p>
                                </div>
                                <div className='home-solution-im right'>
                                    <img 
                                        src={right}
                                        alt='right arrow'
                                    /> 
                                </div>
                            </div>
                        </div>
                        <div className='home-solution-cite'>
                            *la durée et les options des offres sont entièrement modulables.
                        </div>
                    </div>
                </div>
                <div className='separator'>
                    <div className='line3'>
                        <img 
                            src={line1}
                            alt='line'
                        /> 
                    </div>
                    <Shadow src={shadow} className='img-shadow7' />
                </div>
                <div className='home-contact'>
                    <div className='home-contact-wrapper'>
                        <div className='card-contact'>
                            <p className='card-contact-text'>
                                Prenez rendez-vous avec l’un de nos conseillers pour poser les fondations de votre future opération de <span className='text-col'>marketing
                                évènementiel</span> à la fois physique, technologique, <span className='text-col'>immersif et digital.</span>
                            </p>
                            <div className='card-contact-cta'>
                                <a href="/">
                                    Parlons-nous !
                                </a>
                            </div>
                        </div>
                        <Shadow src={shadow} className='img-shadow8' />
                        <div className='card-contact'>
                            <p className='card-contact-text'>
                                Pas de projets précis en vue, mais l’envie d’en savoir plus sur Capsul Events, rendez-vous sur 
                                <span className='text-under'> notre site !</span> Vous pourrez même y faire une simulation sur la rentabilité d’une opération menée avec la Capsul.
                            </p>
                            <div className='card-contact-cta'>
                                <a href="/">
                                    Calculez votre ROI en live
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hearphone' data-aos="slide-right">
                        <img 
                            src={hear}
                            alt='hear pod'
                        /> 
                    </div>
                </div>
                <div id='copyright'>
                    <p>©copyright</p>
                </div>
            </div>
        </div>
    )
}

export default Home;