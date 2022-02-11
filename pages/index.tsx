import React from 'react'
import { MagicMenu } from 'src/components/MagicMenu/MagicMenu'
import styled from 'styled-components'

type Props = {
  className?: string
}

const IndexBase: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MagicMenu />
    </div>
  )
}

const Index = styled(IndexBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #222327;
`
export default Index
