import React from 'react'
import { FollowCompo } from '../../components/followCompo/FollowCompo'
import { AddBtn } from '../../components/iconButton/IconButton'
import { Link } from 'react-router-dom'

export default function DefaultFeed() {
  const textBtn = "펫 등록하기"
  const textDefault = "함께 놀 친구들을 찾아보세요! :)"
  const url = '/post'
  return (
    <main>
      <FollowCompo url={url} textBtn={textBtn} textDefault={textDefault} />
      <Link to={url}>
        <AddBtn/>
      </Link>
    </main>
  )
}