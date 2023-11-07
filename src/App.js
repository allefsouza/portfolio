import React from 'react';
import { DivMaster, DivCode, ImgLeft, ImgRight } from './styled';
import { GlobalStyle } from './globalStyeld';
import leftarrow from './assests/leftarrow.png'
import rightarrow from './assests/rightarrow.png'
import Header from './components/header';


export default function src() {
 return (
   <DivMaster>
      <GlobalStyle/>
      <Header/>
      <DivCode>
      <ImgLeft src={leftarrow}/>
      <h1>coder</h1>
      <ImgRight src={rightarrow}/>
      </DivCode>
   </DivMaster>
 );
}
