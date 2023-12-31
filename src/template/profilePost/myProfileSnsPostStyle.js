import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const ShowWrap = styled.div`
  text-align: right;
  padding: 9px 0px;
  margin-right: 0;
  border-bottom: solid 4px ${palette.lineColor};
`

export const ShowBtnStyle = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 16px;
  cursor: pointer;
`