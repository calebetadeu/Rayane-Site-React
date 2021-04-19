import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../../globalStyles'

import {Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink} from './Navbar.elements'


const Navbar=()=> {
    const [click,setClick]=useState(false)
    const [button,setButton]=useState(true)
   
   
    const handleClick=()=> setClick (!click)
    const closeMobileMenu =()=>setClick(false)

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
     showButton()   
    }, [])
    
    window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}  >
        <Nav>
            <NavbarContainer>
               <NavLogo to='/'  onClick={handleClick} >
                   <NavIcon/>
                 Lucas Nunes 
                   
               </NavLogo>
               <MobileIcon  onClick={handleClick} >
                   {click? <FaTimes/> : <FaBars/>  }
               </MobileIcon>
               <NavMenu onClick={handleClick} click={click} >
                   <NavItem>
                       <NavLinks to='/' onClick={closeMobileMenu} >Inicio</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/About' onClick={closeMobileMenu}  >Sobre</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='/Services' onClick={closeMobileMenu} >Desafios dos Jeans</NavLinks>
                   </NavItem>
                   <NavItemBtn>
                      {button?(
                          <a href="https://api.whatsapp.com/send?phone=5598982677067&text=Oi%2C%20Gostaria%20de%20Solicitar%20um%20Servi%C3%A7o%20">
                            <Button   primary>Agendar Consulta</Button>  
                          </a>
                      
                      ):(
                          <NavBtnLink to="/sing-up">
                              <Button onClick={closeMobileMenu}  fontBig primary>
                                  SING UP
                              </Button>
                          </NavBtnLink>
                      )
                    } 
                   </NavItemBtn>
               </NavMenu>
               
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
