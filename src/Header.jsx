import React from 'react'
// import ProfilePhoto from './images/CJ.jpg'

export default function Header() {
    return (
        <header>
            <img src="./images/CJ.jpg" alt="Chigozie's photo" />
            <h1>Maduka Chigozie</h1>
            <h4>Frontend Developer</h4>
            <a href='jonech.tech' target='_blank'>jonech.tech</a>
            <div className='info'>
                <a href='mailto:chigoziemaduka401@gmail.com' className='email'>
                    <i className="fa-solid fa-envelope"></i>
                    <p>Email</p>
                </a>
                <a href='https://www.linkedin.com/in/johnpaul-maduka/' target='_blank' className='linkedin'>
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                </a>
            </div>
        </header>
    )
}