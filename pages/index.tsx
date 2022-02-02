import React from 'react'
import { Button } from 'src/components/Button'
import styled from 'styled-components'

type Props = {
  className?: string
}

const IndexBase: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Button />
    </div>
  )
}

const Index = styled(IndexBase)``
export default Index
