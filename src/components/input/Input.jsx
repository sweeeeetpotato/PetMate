import React,{ memo } from 'react'
import { LabelStyle, InputStyle, SearchStyle, TextAreaStyle } from './inputStyle'

export function NameInput({ userName, setName, register, placeholder }) {
  return (
    <LabelStyle>사용자 이름
      <InputStyle
        placeholder={placeholder}
        type='text'
        name='userName'
        value={userName}
        {...register('userName', {
          required: '*이름은 필수 입력 사항입니다.',
          minLength: {
            value: 2,
            message: '*이름은 2-10자 이내여야 합니다.'
          },
          maxLength: {
            value: 10,
            message: '*이름은 2-10자 이내여야 합니다.'
          },
          onChange: (e) => setName(e.target.value),
        })}
        maxLength='10'
        autoFocus
      />
    </LabelStyle>
  );
}
export const MemoNameInput = memo(NameInput)

export function IdInput({ setId, IdCheck, register, placeholder, disabled, userId }) {
  return (
    <LabelStyle>계정 ID
      <InputStyle
        disabled={disabled}
        placeholder={placeholder}
        type='text'
        name='userId'
        value={userId}
        {...register('userId', {
          required: '*계정 ID는 필수 입력 사항입니다.',
          pattern: {
            value: /^[_A-Za-z0-9.]*$/,
            message: '*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.'
          },
          maxLength: {
            value: 20,
            message: '*계정 ID는 20자 이내여야 합니다.'
          },
          onChange: (e) => setId(e.target.value),
          onBlur: IdCheck,
        })}
        maxLength='20'
      />
    </LabelStyle>
  );
}

export function IntroInput({ userIntro, setIntro, placeholder, register }) {
  return (
    <LabelStyle>소개
      <InputStyle
        placeholder={placeholder}
        type='text'
        name='userIntro'
        value={userIntro}
        {...register('userIntro', {
          maxLength: {
            value: 200,
            message: '*프로필 소개는 200자 이내여야 합니다.'
          },
          onChange: (e) => setIntro(e.target.value)
        })}
        autoComplete='off'
        maxLength='200'
      />
    </LabelStyle>
  )
}
export const MemoIntroInput = memo(IntroInput);

export function EmailInput({ userEmail, setEmail, emailCheck, register }) {
  return (
    <LabelStyle>이메일
      <InputStyle
        placeholder='이메일 주소를 입력해 주세요.'
        type='email'
        name='userEmail'
        value={userEmail}
        {...register('email', {
          required: '*이메일은 필수 입력 사항입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '*올바르지 않은 이메일 형식입니다.'
          },
          onChange: (e) => setEmail(e.target.value),
          onBlur: emailCheck
        })}
        autoFocus
      />
    </LabelStyle>
  );
}
export const MemoEmailInput = memo(EmailInput)

export function PasswordInput({ userPassword, setPassword, register }) {
  return (
    <LabelStyle>비밀번호
      <InputStyle
        placeholder='비밀번호를 설정해 주세요.'
        type='password'
        name='userPassword'
        value={userPassword}
        {...register('password', {
          required: '*비밀번호는 필수 입력 사항입니다.',
          minLength: {
            value: 6,
            message: '*비밀번호는 6자 이상이어야 합니다.'
          },
          onChange: (e) => setPassword(e.target.value)
        })}
      />
    </LabelStyle>
  );
}
export const MemoPasswordInput = memo(PasswordInput);

export function PasswordConfirmInput({ userPassword, userConfirmPassword, setConfirmPassword, register }) {
  return (
    <LabelStyle>비밀번호 확인
      <InputStyle
        placeholder='비밀번호를 재입력 해주세요.'
        type='password'
        name='userConfirmPassword'
        value={userConfirmPassword}
        userPassword={userPassword}
        {...register('userConfirmPassword', {
          required: '*비밀번호를 확인해 주세요.',
          validate: {
            passwordCheck: (value) => {
              return value === userPassword || '*비밀번호가 일치하지 않습니다.'
            }
          },
          onChange: (e) => setConfirmPassword(e.target.value)
        })}
      />
    </LabelStyle>
  );
}
export const  MemoPasswordConfirmInput = memo(PasswordConfirmInput);

export function TitleInput({ setTitle, defaultValue }) {
  return (
    <LabelStyle>제목
      <InputStyle
        key={defaultValue}
        placeholder='2-15자 이내여야 합니다.'
        type='text'
        name='Title'
        minLength='2'
        maxLength='15'
        onChange={(e) => { setTitle(e.target.value) }}
        defaultValue={ defaultValue }
      />
    </LabelStyle>
  );
}

export function PetInfoInput({ setPetInfo, defaultValue }) {
  return (
    <LabelStyle>반려동물 정보
      <TextAreaStyle
        key={defaultValue}
        placeholder='종류 / 나이 / 성별 / 주의사항을 작성해 주세요.'
        type='text'
        name='petInfo'
        onChange={(e) => { setPetInfo(e.target.value) }}
        defaultValue={ defaultValue }
      />
    </LabelStyle>
  );
}

export function SearchInput({ props, placeholder, onChange }) {
  return (
    <SearchStyle
      placeholder={placeholder}
      type='search'
      name='search'
      right={props}
      onChange={onChange}
    />
  );
}