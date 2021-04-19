import React from 'react';
import { Button } from '../../globalStyles';


import {  GiZipper  } from 'react-icons/gi';


import { IconContext } from 'react-icons/lib';
import {

  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

export function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiZipper />
                </PricingCardIcon>
                <PricingCardPlan></PricingCardPlan>
                <PricingCardCost>R$25</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Emagrecimento Saudável</PricingCardFeature>
                  <PricingCardFeature>Para Homens e Mulheres</PricingCardFeature>
                  <PricingCardFeature>Treino em Casa</PricingCardFeature>
                  <PricingCardFeature>100% Online</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Comece Agora</Button>
              </PricingCardInfo>
            </PricingCard>
            </PricingContainer>

           </IconContext.Provider>
  );
}
export default Pricing;
