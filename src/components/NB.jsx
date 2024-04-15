import {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import AYG from '../assets/img/AYG.png';
import LinkedIn from '../assets/img/LinkedIn.png';
import GitHub from '../assets/img/GitHuBW.png';
import Hambur from '../components/Hambur.jsx'

export const NavBar =()=> {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
           const onScroll = () => {
            if (window.scrollY > 50) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
           }
          window.addEventListener("scroll", onScroll);
          return() => window.removeEventListener("scroll", onScroll);
  },[])
  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container className='container-nav'>
        <Navbar.Brand href="#home">
            <img src={AYG} alt='Logo' className='logo'/>
        </Navbar.Brand>
          
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" id ="menuP" className={activeLink === 'home' ? 'active navbar-link' : 'navbarlink'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" id ="menuP" className={activeLink === 'skills' ? 'active navbar-link' : 'navbarlink'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" id ="menuP" className={activeLink === 'projects' ? 'active navbar-link' : 'navbarlink'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <Nav className="links"> <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/aranzazu-galvaliz-11bb87266/"><img src={LinkedIn} alt=''/></a>
                <a href="https://github.com/aranza318"><img src={GitHub} alt=''/></a>
            </div>
           <a href="#connect" className="btn"><button className='vvd' onClick={()=> console.log('connect')}><span>Let's connect</span></button></a> 
          </span>
          </Nav>
        
        </Navbar.Collapse>
        <Hambur/>
      </Container>
    </Navbar>
  );
}
