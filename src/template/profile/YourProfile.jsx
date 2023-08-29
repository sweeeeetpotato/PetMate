import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IdText,
  IntroText,
  Wrapper,
  ColumnWapper,
  FollowerText,
  FollowerCount,
  NameText,
  ButtonWrap,
  OnlyIconButton,
} from './ProfileStyle';
import { ProfileImg } from '../../components/profile/profileStyle';
import { ProfileFollowToggleBtn } from '../../components/button/Button';
import { imgCheck } from '../../components/user/User';
import chatIcon from '../../assets/icon-message.svg';
import shareIcon from '../../assets/icon-share.svg';
import useGetData from '../../hook/query/useGetData';
import useFollow from '../../hook/mutation/useFollow';
import useUnFollow from '../../hook/mutation/useUnFollow';

function YourProfile({ userId }) {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const accountname = userId;
  const [yourInfoList, setYourInfoList] = useState([]);
  const [isFollow, setIsFollow] = useState();
  const { data } = useGetData(`${URL}/profile/${accountname}`, accountname);
  const followMutation = useFollow(accountname);
  const unfollowMutation = useUnFollow(accountname);

  function onClick() {
    if (!isFollow) {
      followMutation.mutate(`${URL}/profile/${accountname}/follow`);
      setIsFollow(true);
    } else {
      unfollowMutation.mutate(`${URL}/profile/${accountname}/unfollow`);
      setIsFollow(false);
    }
  }

  useEffect(() => {
    if (data) {
      setYourInfoList(data.profile);
      setIsFollow(data.profile.isfollow);
    }
  }, [data]);

  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <Link to='/follow' state={{ text: 'followers', userId: accountname }}>
            <FollowerCount>{yourInfoList.followerCount}</FollowerCount>
            <FollowerText>followers</FollowerText>
          </Link>
        </ColumnWapper>
        <ProfileImg src={imgCheck(yourInfoList.image)} />
        <ColumnWapper>
          <Link
            to='/follow'
            state={{ text: 'followings', userId: accountname }}
          >
            <FollowerCount>{yourInfoList.followingCount}</FollowerCount>
            <FollowerText>followings</FollowerText>
          </Link>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>{yourInfoList.username}</NameText>
        <IdText>&#64; {yourInfoList.accountname}</IdText>
        <IntroText>{yourInfoList.intro}</IntroText>
      </ColumnWapper>
      <ButtonWrap>
        <OnlyIconButton
          icon={chatIcon}
          color={'#767676'}
          backColor={'white'}
          width={34}
          height={34}
        />
        {isFollow !== undefined && (
          <ProfileFollowToggleBtn onClick={onClick} isFollow={isFollow} />
        )}
        <OnlyIconButton
          icon={shareIcon}
          color={'#767676'}
          backColor={'white'}
          width={34}
          height={34}
        />
      </ButtonWrap>
    </>
  );
}

export default YourProfile;
