import React from 'react'
import styled from 'styled-components'
type Props = {
  className?: string
}
export const FCButton: React.FC<Props> = ({ className }) => {
  return <div className={className}>Button</div>
}
export const Button = styled(FCButton)``
