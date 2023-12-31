import React from 'react'
import { Heading } from '../../style/commonStyle'
import { FollowCompoWrapper, DefaultTxt } from './followCompoStyle'
import grayLogo from '../../assets/gray-logo.svg'
import logo404 from '../../assets/404-logo.svg'
import { MiddleBtn } from '../../components/button/Button'
import { Link, useNavigate } from "react-router-dom"

export function FollowCompo({TEXT_BTN,TEXT_DEFAULT,URL}) {
  return (
    <FollowCompoWrapper>
      <img src={grayLogo} />
      <DefaultTxt>
        {TEXT_BTN}
      </DefaultTxt>
      <Link to={URL}>
        <MiddleBtn textBtn={TEXT_DEFAULT} />
      </Link>
    </FollowCompoWrapper>
  );
}

export function NotFoundCompo() {
  const navigate = useNavigate();
  return (
    <FollowCompoWrapper>
      <Heading>페이지를 찾을 수 없습니다.</Heading>
      <img src={logo404} />
      <DefaultTxt>
        페이지를 찾을 수 없습니다. :&#40;
      </DefaultTxt>
      <MiddleBtn textBtn={'홈으로 이동'} onClickFt={() => navigate('homepage')} />
    </FollowCompoWrapper>
  );
}

