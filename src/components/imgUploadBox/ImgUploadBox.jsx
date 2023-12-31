import React from 'react'
import { FileUploader, FileInput, ImgRegist, TitleTxt, ImgUploadWrapper, BeforeRegist } from './imgUploadBoxStyle'

export default function ImgUploadBox({ onChange, fileref, src, defaultImg }) {
  return (
    <ImgUploadWrapper>
      <TitleTxt>이미지 등록</TitleTxt>
      {
        (!!src === false) && (!!defaultImg === false)
          ?
          <BeforeRegist onClick={() => { fileref.current.click() }} /> 
          :
          <ImgRegist src={src ? src : defaultImg} alt='반려동물 이미지 등록' onClick={() => { fileref.current.click() }} />
      }
      <FileUploader htmlFor="input-file">
        <FileInput
          id='input-file'
          type='file'
          accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
          name='profileImg'
          onChange={onChange}
          ref={fileref}
        />
      </FileUploader>
    </ImgUploadWrapper>
  );
}
