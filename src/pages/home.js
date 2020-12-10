import React from 'react';
import {Feature, OptForm} from '../components'
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';



export default function Home() {
  return (
<>
<HeaderContainer>
  <Feature>
    <Feature.Title>Unlimited films, TV programms and more</Feature.Title>
    <Feature.SubTitle>Watch anywhere. Cancel at any Time</Feature.SubTitle>
    <OptForm>
          <OptForm.Input placeholder ="email adress" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>Ready to watch ? Enter your Email to create or restart your membership</OptForm.Text>
        </OptForm>
  </Feature>

     </HeaderContainer>
   <JumbotronContainer />
   <FaqsContainer />
   <FooterContainer />

   
  
</>

  );
}

