import React from 'react'
import { FaFacebook,FaWhatsapp,FaYoutube,FaInstagram } from 'react-icons/fa'
import {Button} from '../../globalStyles'
import {FooterContainer,
    FooterSubscription,
    FooterSubHeading,
FooterSubText,
Form,
FormInput,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkTitle,
FooterLinkItems,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink,
SocialIcon
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
        <FooterSubscription>
        <FooterSubHeading>
            Junte-se ao grupo exclusivo do Wathsapp
        </FooterSubHeading>
        <FooterSubText>
            Você pode Agendar a sua Consulta
        </FooterSubText>
        <Form>
            <FormInput name="email" type="email" placeholder="Your Email" />
                <Button fontBig >Subscribe</Button>
         </Form>
        </FooterSubscription>
         <FooterLinksContainer>
             <FooterLinksWrapper>
                 <FooterLinkItems>
                     <FooterLinkTitle>Horários de Atendimento</FooterLinkTitle>
                     <FooterLink to='/sign-up'>Segunda a sexta-feira</FooterLink>
                     <FooterLink></FooterLink>
                     <FooterLink></FooterLink>
                    <FooterLink>Das 8h às 19h</FooterLink>
                    <FooterLink></FooterLink>
                    <FooterLink>Atendimento online!</FooterLink>
                 </FooterLinkItems>

                 <FooterLinkItems>
                     <FooterLinkTitle>LOCAL:</FooterLinkTitle>
                     <FooterLink to='/sign-up'>Academia Smartfit , Bom Jesus da Lapa, Ba
</FooterLink>
                     <FooterLink>Consultorio Fit , Bom Jesus da Lapa ,Ba</FooterLink>
                     
                 </FooterLinkItems>
                 </FooterLinksWrapper>
                     <FooterLinksWrapper>

                 <FooterLinkItems>
                     <FooterLinkTitle> Mais informações </FooterLinkTitle>
        
                    <FooterLink> </FooterLink>
                     <FooterLink></FooterLink>
                    <FooterLink></FooterLink>
                    <FooterLink></FooterLink>
                 </FooterLinkItems>

                 <FooterLinkItems>
                     <FooterLinkTitle>CONTATO: </FooterLinkTitle>
                     
                     <FooterLink>+55 (98) 982677067</FooterLink>
                     <FooterLink>calebetadeu@gmail.com </FooterLink>
                     
                 </FooterLinkItems>
                
                  </FooterLinksWrapper>
             </FooterLinksContainer>  
             <SocialMedia>
                 <SocialMediaWrap>
                     <SocialLogo to='/'>
                        <SocialIcon/>
                           Rayane Barbara
                       
                     </SocialLogo>
                     <WebsiteRights>Rayane 2020 </WebsiteRights>
                     <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook" >
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram" >
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube" >
                            <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Wathsapp" >
                            <FaWhatsapp/>
                            </SocialIconLink>

                     </SocialIcons>
                     

                 </SocialMediaWrap>
             </SocialMedia>

        </FooterContainer>
    )
}

export default Footer
