import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/contact')
    }
    return (
        <section id='home' className='home'>
            <div className='home__text-wrapper'>
                <h1 className=''>
                    Hello, I'm Lokesh Vashishth.
                    <br />
                    I'm Software Developer.
                </h1>
            </div>
            <div className='home__contact-me'>
                <button onClick={handleNavigate}>Hire me</button>
            </div>
        </section>
    )
}

export default Home
