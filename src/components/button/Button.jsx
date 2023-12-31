import React, { useState } from 'react'
import { Button, IconButton, PostSaveBtnWrapper } from './buttonStyle'
import iconEmail from '../../assets/icon-email.svg'
import iconSign from '../../assets/icon-signup.svg'
import { Link } from 'react-router-dom'
import { palette } from '../../style/globalColor'

// 검증관련 버튼 
export function NextBtn({ nextClick, disabled, message }) {
  if (message === '이미 가입된 이메일 주소 입니다.' || message === '' || !disabled) {
    return <Button type='button'>다음</Button>
  }
  else {
    return (
      <Button 
        type='button'
        onClick={nextClick}
        disabled={!disabled}
        hover>다음
      </Button>
    );
  }
}

export function StartBtn({ signUp, disabled, message }) {
  if (message === '이미 가입된 계정ID 입니다.' || message === '' || !disabled) {
    return <Button>시작하기</Button>
  }
  else {
    return <Button onClick={signUp} disabled={!disabled} hover>시작하기</Button>
  }
}

// 기본 버튼 -> 텍스트 넣어서 사용
export function LoginBtn({ onClick }) {
  return (
    <Button onClick={onClick} hover>
      로그인
    </Button>
  );
}

// 아이콘있는 버튼
export function EmailLoginBtn() {
  return (
    <IconButton icon={iconEmail} hover>
      이메일로 로그인
    </IconButton>
  );
}

export function JoinBtn() {
  return (
    <IconButton icon={iconSign} hover>
      회원가입
    </IconButton>
  );
}

export function SaveBtn(props) {
  return (
    <Button
      width={90}
      height={32}
      onClick={props.profileSave}
      hover>
      저장
    </Button>
  );
}

export function PostSaveBtn({ disabled, onClick, link }) {
  if (disabled) {
    return (
      <Button 
        width={90}
        height={32}
        disabled={disabled}>
        저장
      </Button>
    );
  }

  else {
    return (
      <PostSaveBtnWrapper>
        <Link to={link}>
          <Button
            width={90}
            height={32}
            onClick={onClick}
            disabled={disabled}
            hover>
            저장
          </Button>
        </Link>
      </PostSaveBtnWrapper>
    );
  }
}

export function UploadBtn({ disabled, onClick }) {
  if (disabled) {
    return (
      <Button
        width={90}
        height={32}
        disabled={disabled}>
        업로드
      </Button>
    );
  }
  else {
    return (
      <PostSaveBtnWrapper>
        <Link to='/profilepage'>
          <Button 
            onClick={onClick}
            width={90}
            height={32}
            hover>
            업로드
          </Button>
        </Link>
      </PostSaveBtnWrapper>
    );
  }
}

// 중간사이즈(120x44) 버튼
export function MiddleBtn({ textBtn, onClickFt }) {
  return (
    <Button 
      width={120}
      height={44}
      onClick={onClickFt}
      hover>
      {textBtn}
    </Button>
  );
}

// 색상반전 버튼
export function ChatBtn() {
  return (
    <Button
      width={80}
      height={32}
      color={palette.mainColor}
      backColor={palette.white}
      hover>
      연락하기
    </Button>
  );
}

// 토글버튼
export function FollowToggleBtn({ onClick, isFollow }) {
  if (!isFollow) {
    return (
      <Button
        width={56}
        height={28}
        onClick={onClick}>
        팔로우
      </Button>
    );
  } else {
    return (
      <Button
        width={56}
        height={28}
        color={palette.middleGray}
        backColor={'white'}
        onClick={onClick}>
          취소
      </Button>
    );
  }
}

export function ProfileFollowToggleBtn({ onClick, isFollow }) {
  if (!isFollow) {
    return (
      <Button
        width={120}
        height={34}
        onClick={onClick} 
        hover>
        팔로우
      </Button>
    );
  } else {
    return (
      <Button
        width={120}
        height={34}
        color={palette.middleGray}
        backColor={palette.white}
        onClick={onClick}>
          언팔로우
      </Button>
    );
  }
}