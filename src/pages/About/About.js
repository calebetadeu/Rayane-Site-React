import React from 'react'
import { homeObjThree, homeObjTwo} from './Data'
import {InfoSectionLife,InfoSectionJeans} from '../../components'



const Home = () => {
    return (
        <>
           <InfoSectionLife {...homeObjTwo} /> 
           <InfoSectionJeans  {...homeObjThree} /> 
           
         
        </>
    )
}

export default Home
