import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Nav } from 'react-bootstrap';
import {useState} from 'react';

function DropdownHambur() {
  const [activeLink, setActiveLink] = useState('home');
 
  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }
  return (
    
    <DropdownButton id="basic-nav-dropdown" title="Menu" className='hambur'>
      <Dropdown.Item as="button" id='menuA'><Nav.Link href="#home" id='colorDM' className={activeLink === 'home' ? 'active navbar-link' : 'navbarlink'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link></Dropdown.Item>
      <Dropdown.Item as="button" id='menuB'><Nav.Link href="#skills" id='colorDM' className={activeLink === 'skills' ? 'active navbar-link' : 'navbarlink'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link></Dropdown.Item>
      <Dropdown.Item as="button" id='menuC'><Nav.Link href="#projects" id='colorDM' className={activeLink === 'project' ? 'active navbar-link' : 'navbarlink'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link></Dropdown.Item>
      <Dropdown.Item as="button" id='menuD'><Nav.Link href="#connect" id='colorDM' className={activeLink === 'connect' ? 'active navbar-link' : 'navbarlink'} onClick={()=> onUpdateActiveLink('connect')}>Contact Zone</Nav.Link></Dropdown.Item>
    </DropdownButton>
   
  );
}

export default DropdownHambur;