import React from 'react'
import { homeObjOne, homeObjThree, homeObjTwo} from './Data'
import {InfoSection,InfoSectionLife,InfoSectionJeans} from '../../components'



const Home = () => {
    return (
        <>
           <InfoSection  {...homeObjOne} /> 
          
        < InfoSectionLife {...homeObjTwo} /> 
           <InfoSectionJeans  {...homeObjThree} /> 
           
          
        </>
    )
}

export default Home
