import React from 'react'
import {Pricing} from '../Pricing/Pricing'
import {Container,Button} from '../../globalStyles'
import {InfoRow,
    InfoColumn,
    InfoSec,
    TextWrapper,
    TopLine,
    Heading,
  Subtitle,
    
} from './infoSectionElements'


const InfoSectionJeans = ({primary,
    lightBg, 
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    lightText,
    topLine,

    
   }) => {
    return (
        <>
            <InfoSec lightBg={lightBg} > 

            <Container>
                <InfoRow imgStart={imgStart} >
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}  > {topLine} </TopLine>
                            <Heading lightText={lightText}> {headline} </Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description} </Subtitle>
                            <a href ="https://api.whatsapp.com/send?phone=5598982677067&text=Oi%2C%20Gostaria%20de%20Solicitar%20um%20Servi%C3%A7o%20" >
                                <Button big fontBig primary={primary} >{ buttonLabel}</Button>
                            </a>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <Pricing/>
                    </InfoColumn>
                </InfoRow>
            </Container>

            </InfoSec>
        </>
    );
}

export default InfoSectionJeans
