import React from 'react'
import { useState,useRef ,useEffect} from 'react'
import {AllWrap,PaddingMain,FormStyle} from '../../style/commonStyle'
import {PostSaveNav} from '../../components/navBack/NavBack'
import ImgUploadBox from '../../components/imgUploadBox/ImgUploadBox'
import {TitleInput,PetInfoInput,PostIntroInput} from '../../components/input/Input'
import { useDispatch, useSelector } from "react-redux";
import {postAllCont,postActions} from '../../reducers/Reducer'
import axios from 'axios';
import { ImgUpload } from '../../pages/SignUpMain';
import {useForm} from 'react-hook-form'

export default function AddPost() {
  const dispatch = useDispatch();
  //form state
  const {
    register,
    formState: {isValid, errors},
  } = useForm({mode : "onChange"});

  //미리보기 이미지 state
  const [showImg, setShowImg] = useState("")
  const fileInput = useRef(null)

  //서버에 보낼 file객체
  const [userImg, setImg] = useState("");

  //input 데이터
  const [Title,setTitle] = useState("")
  const [petInfo,setPetInfo] = useState("")
  //버튼활성화
  const [btn,setBtn] = useState(true)


  //서버에 보낼 데이터
  let postData= {
    "product":{
      "itemName": Title,
      "price": 9999999,
      "link": petInfo,
      "itemImage": ""
    },
  }

  //버튼활성화
  useEffect(()=>{
    console.log(Title.length);
    if(Title.length>=2&& petInfo!==""&& showImg!==""){
      setBtn(false)
    }
    else{
      setBtn(true)
    }
  },[Title,petInfo,showImg])

  //이미지미리보기
  const onChange = (e) => {
    if (e.target.files[0]) { 
      setShowImg(e.target.files[0])  
      setImg(e.target.files[0])
    } 
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setShowImg(reader.result)
      }
      else{
        return
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  // 게시글 서버에 보내기
  async function PostSave(){
    const imgData = await ImgUpload(userImg);
    postData.product.itemImage = imgData
    console.log("postData",postData);
    const URL = "https://mandarin.api.weniv.co.kr";
    const loginReqPath = "/product";
    const token = JSON.parse(localStorage.getItem("userinfo")).user.token;
    const res = await axios.post(URL+loginReqPath,postData,{
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    });
    console.log("res : ",res);
    dispatch(postActions.postAllCont(postData));
  }
  
  return (
    <AllWrap>
      <header>
        <PostSaveNav onClick={PostSave} disabled={btn}/>
      </header>
      <PaddingMain>
        <ImgUploadBox onChange={onChange} src={showImg} fileref={fileInput} setImg={setImg} />
        <FormStyle>
          <TitleInput Title={Title} setTitle={setTitle} register={register} />
          <PetInfoInput petInfo = {petInfo} setPetInfo={setPetInfo}/>
        </FormStyle>
      </PaddingMain>
    </AllWrap>
  )
}