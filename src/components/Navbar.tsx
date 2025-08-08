import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { navLinks } from '../../constants';
import gsap from 'gsap';

export interface NavLinks {
    id: string;
    title: string;
}

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",

            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent'} , {
            backgroundColor:'#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    
    })


  return (
    <nav className="">
        <div className="">
            <a href="#" className="flex items-center gap-2">
                <img src="../assets/images/logo.png" alt="logo" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link: NavLinks) => (
                    <li key={link.id} className="">
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar