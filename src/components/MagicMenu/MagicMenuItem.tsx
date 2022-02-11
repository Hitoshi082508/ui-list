import React, { useState } from 'react'
import styled from 'styled-components'
import { IconType } from 'react-icons/lib'

type Props = {
  className?: string
  text: string
  initialState: boolean
  Icon: IconType
}
export const FCMagicMenuItem: React.FC<Props> = ({
  className,
  text,
  initialState,
  Icon,
}) => {
  const [active, setActive] = useState(initialState)

  const classToggle = () => {
    setActive(!active)
  }

  return (
    <li
      onClick={classToggle}
      className={active ? `${className}__list active` : `${className}__list`}
    >
      <a href="#" className={`${className}__link`}>
        <span className={`${className}__icon`}>
          <Icon />
        </span>
        <span className={`${className}__text`}>{text}</span>
      </a>
    </li>
  )
}
export const MagicMenuItem = styled(FCMagicMenuItem)`
  &__list {
    position: relative;
    width: 70px;
    height: 70px;
    z-index: 1;
  }
  &__link {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }
  &__icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: #222327;
  }
  li.active &__icon {
    transform: translateY(-32px);
  }
  &__text {
    position: absolute;
    color: #222327;
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
    margin: 0 auto;
  }
  li.active &__text {
    opacity: 1;
    transform: translateY(10px);
  }
`
