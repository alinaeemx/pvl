import { Avatar } from 'antd'
import React from 'react'
import { 
  // Link, 
  useNavigate } from 'react-router-dom';
import { TITLE_HEADER } from '../../constants/constants';
import logo from '../../assets/logo.svg'
export const AvatarLogo = () => {
  const navigate = useNavigate();
  return (
    // <Link
    //   to='/'
    // >
      <Avatar
        alt={TITLE_HEADER}
        src={logo}
        className='cursor-pointer'
        style={{ borderRadius: 0 }}
        size={50} gap={2}
        onClick={() => {
          navigate(-1);
        }}
      >
        Logo
      </Avatar>
    // </Link>
  )
}
