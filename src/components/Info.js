import React from 'react'
import pic from './pic1.jpg'
import pic5 from './icons/gmail.png'
import pic6 from './icons/upwork.png'

export default function Info() {
    return (
        <main>
            <img className='img-item' src={pic} width = '12%'></img>
            <h1>Akpan Caleb</h1>
            <h3>Backend Developer</h3>
            <p className='info-p'>akpancaleb.website</p>
            <button className='email-btn'> email <img src={pic5} /> </button>
            <button className='upwork-btn'> Upwork <img src={pic6} /> </button>
        </main>
    )
}

// some change