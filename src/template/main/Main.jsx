import React from 'react';
import { Link } from 'react-router-dom';
import { AllWrap } from '../../style/commonStyle';
import { EmailLoginBtn, JoinBtn } from '../../components/button/Button.jsx';
import { Gap, Wrapper, FullLogoStyle } from './mainStyle.js';

function Main() {
  return (
    <AllWrap>
      <Wrapper>
        <FullLogoStyle />
        <Gap>
          <Link to='/login'>
            <EmailLoginBtn />
          </Link>
          <Link to='/join'>
            <JoinBtn />
          </Link>
        </Gap>
      </Wrapper>
    </AllWrap>
  );
}

export default Main;
