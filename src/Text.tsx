import React from 'react'
import { styled } from 'goober'

const Text = styled('p')`
  color: red;
`

export default function Paragraph({ children }) {
  return <Text>{children}</Text>
}
