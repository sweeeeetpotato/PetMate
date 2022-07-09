import { EmailLoginBtn, JoinBtn } from '../../components/button/Button.jsx';
import React from 'react'
import { LogoStyle, Gap } from './mainStyle.js';
import { PaddingMain } from '../../style/commonStyle'
import { Link } from "react-router-dom";


function Main({loading,visible}) {
 
  return (
    <>
      {
        (loading ==='false')&&
          <PaddingMain>
            <LogoStyle />
            <Gap>
              <Link to ="/login" >  <EmailLoginBtn /></Link>
            </Gap>
            <Link to ="/join" > <JoinBtn /></Link>
          </PaddingMain> 
        
      }
    </>
  )
}

export default Main