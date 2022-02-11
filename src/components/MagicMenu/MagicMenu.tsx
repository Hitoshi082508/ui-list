import React, { useState } from 'react'
import styled from 'styled-components'
// icons
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { AiOutlineCamera } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'
import { MagicMenuItem } from './MagicMenuItem'
type Props = {
  className?: string
}
export const FCMagicMenu: React.FC<Props> = ({ className }) => {
  const [active, setActive] = useState(false)

  const classToggle = () => {
    setActive(!active)
  }

  // const setClassName = () => {
  //   if (active) {
  //     return `${className}__list active`;
  //   } else {
  //     return `${className}__list`;
  //   }
  // }

  return (
    <div className={className}>
      <ul>
        <MagicMenuItem text="Home" Icon={AiOutlineHome} initialState={true} />
        <MagicMenuItem text="User" Icon={AiOutlineUser} initialState={false} />
        <MagicMenuItem text="Message" Icon={BsChat} initialState={false} />
        <MagicMenuItem
          text="Photos"
          Icon={AiOutlineCamera}
          initialState={false}
        />
        <MagicMenuItem
          text="Settings"
          Icon={AiOutlineSetting}
          initialState={false}
        />
        <div className={`${className}__indicator`}></div>
      </ul>
    </div>
  )
}
export const MagicMenu = styled(FCMagicMenu)`
  width: 400px;
  height: 70px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ul {
    display: flex;
    width: 350px;
  }
  &__indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: #29fd53;
    border-radius: 50%;
    border: 6px solid #222327;
    transition: 0.5s;
  }
  &__indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0 -10px 0 0 #222327;
  }
  &__indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0 -10px 0 0 #222327;
  }
  li:nth-child(1).active ~ &__indicator {
    transform: translateX(calc(70px * 0));
  }
  li:nth-child(2).active ~ &__indicator {
    transform: translateX(calc(70px * 1));
  }
  li:nth-child(3).active ~ &__indicator {
    transform: translateX(calc(70px * 2));
  }
  li:nth-child(4).active ~ &__indicator {
    transform: translateX(calc(70px * 3));
  }
  li:nth-child(5).active ~ &__indicator {
    transform: translateX(calc(70px * 4));
  }
`
