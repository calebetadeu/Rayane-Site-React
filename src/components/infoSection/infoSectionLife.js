import React from 'react'
import {Container} from '../../globalStyles'
import {InfoRow,
    InfoColumn,
    InfoSec,
    TextWrapper,
    
  Subtitle,
    ImgWrapper,
Img
} from './infoSectionElements'



const infoSectionLife = ({primary,
    lightBg, 
    imgStart,
    lightTopLine,
    lightTextDesc,
 
    description,
  
    lightText,
    topLine,
    alt,
    start,
    img}) => {
    return (
        <>
            <InfoSec lightBg={lightBg} > 

            <Container>
                <InfoRow imgStart={imgStart} >
                    <InfoColumn>
                        <TextWrapper>
                        <Subtitle lightTextDesc={lightTextDesc}>{description} </Subtitle>
                            
                            
                            
                            <a href ="https://api.whatsapp.com/send?phone=5598982677067&text=Oi%2C%20Gostaria%20de%20Solicitar%20um%20Servi%C3%A7o%20" >
                          
                            </a>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start} >
                            <Img  src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>

            </InfoSec>
        </>
    );
}

export default infoSectionLife
