import React from 'react'
import { ProfileImg } from '../../components/profile/profileStyle'
import basicImg from '../../assets/basic-profile.svg'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap } from './ProfileStyle'
import { Button } from '../../components/button/buttonStyle'
import { Link } from 'react-router-dom'

function MyProfile(props) {
  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <FollowerCount>{props.follower}</FollowerCount>
          <FollowerText>followers</FollowerText>
        </ColumnWapper>
        <ProfileImg
          src={basicImg} alt='user-img'
        />
        <ColumnWapper>
          <FollowerCount>{props.following}</FollowerCount>
          <FollowerText>followings</FollowerText>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>{props.name}</NameText>
        <IdText>@ {props.id}</IdText>
        <IntroText>{props.intro}</IntroText>
      </ColumnWapper>
      <ButtonWrap>
        <Link to="/profilemodify">
          <Button
            width={120}
            height={34}
            color={'#767676'}
            backColor={'white'}
            hover
          >프로필 수정
          </Button>
        </Link>
        <Link to="/post">
          <Button
            width={120}
            height={34}
            color={'#767676'}
            backColor={'white'}
            hover
          >펫 등록
          </Button>
        </Link>
      </ButtonWrap>
    </>
  )
}

export default MyProfile