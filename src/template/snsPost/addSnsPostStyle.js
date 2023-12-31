import styled from 'styled-components';
import blueImg from '../../assets/upload-file.svg'
import deleteBtn from '../../assets/delete-btn.svg'

export const TextLable = styled.label`
  display:none;
`

export const TextInput = styled.textarea`
  width: 100%;
  height: 40vh;
  margin-top:18px;
  padding: 32px 0;
  box-sizing:border-box;
  border:none;
  outline:0px none transparent;
  resize: none;
`

export const FileUploader = styled.label`
  background: url(${(blueImg)});
  background-repeat: no-repeat;
  background-size: 36px;
  position: absolute;
  width: 36px;
  height: 36px;
  bottom: 12px;
  right : 12px;
`

export const FileInput = styled.input`
  display: none;
`

export const ImgWrapper = styled.div`
  box-sizing:border-box;
  width:100%;
  height:300px;
  bottom: 130px;
  left : 0;
  right:0;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  margin-top: 25px; 
  `

export const SingleImg = styled.img`
  width: 400px;
  height:300px;
  border-radius:10px;
  object-fit: cover;

  @media screen and (max-width:380px){
    width:150px;
    height:90px;
  }
`

export const Img = styled.img`
  object-fit: cover;
  margin:5px;
  width:200px;
  height:130px;
  border-radius:10px;

  @media screen and (max-width:380px){
    width:150px;
    height:90px;
  }
`

export const DeleteBtn = styled.button`
  cursor: pointer;
  position:absolute;
  top: 1;
  width:20px;
  height:20px;
  background: url(${(deleteBtn)});
  background-repeat: no-repeat;
`
