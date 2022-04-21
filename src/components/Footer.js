import icon1 from './icons/facebook.png'
import icon2 from './icons/github.png'
import icon3 from './icons/instagram.png'
import icon4 from './icons/twitter.png'


export default function Footer() {
    return(
        <footer className='footer'>
            <img src={icon1}></img>
            <img src={icon2}></img>
            <img src={icon3}></img>
            <img src={icon4}></img>
        </footer>
    )
}