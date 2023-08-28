import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBack } from '../../components/navBack/NavBack';
import { UserFollow } from '../../components/user/User';
import TabMenu from '../../components/tabMenu/TabMenu';
import { AllWrap } from '../../style/commonStyle';
import useGetData from '../../hook/query/useGetData';
import { FollowMain } from './followStyle';

function Follow() {
  const URL = `https://api.mandarin.weniv.co.kr`;
  const NavBackTitle = useLocation().state?.text;
  const accountname = useLocation().state?.userId
    ? useLocation().state?.userId
    : JSON.parse(localStorage.getItem('accountname'));
  const URL_PART = NavBackTitle === 'followers' ? 'follower' : 'following';
  const { isLoading, data } = useGetData(
    URL + `/profile/${accountname}/${URL_PART}?limit=1000`,
    NavBackTitle
  );
  console.log(isLoading);
  return (
    <AllWrap>
      <Helmet>
        <title>내 팔로워/팔로잉 리스트 - 산책가까?</title>
      </Helmet>
      <NavBack text={NavBackTitle} />
      <FollowMain>
        {!isLoading &&
          data &&
          data.map((userInfo) => (
            <UserFollow
              key={userInfo._id}
              userName={userInfo.username}
              userId={userInfo.accountname}
              img={userInfo.image}
            />
          ))}
      </FollowMain>
      <TabMenu />
    </AllWrap>
  );
}

export default Follow;
