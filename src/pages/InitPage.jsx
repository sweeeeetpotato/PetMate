import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AxiosVerifyToken,
  getTokenVerifyStatus,
} from '../reducers/verifyTokenSlice';
import Main from '../template/main/Main';

export default function InitPage() {
  const VerifyToken = useSelector(getTokenVerifyStatus).status;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (VerifyToken === 'idle') {
      const URL = 'https://api.mandarin.weniv.co.kr';
      dispatch(AxiosVerifyToken(URL + '/user/checktoken'));
    }

    if (VerifyToken === true) {
      navigate('/homepage');
    } else if (VerifyToken === 'fail' || VerifyToken === false) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('accountname');
      navigate('/login');
    }
  }, [dispatch, VerifyToken]);

  return <Main />;
}
