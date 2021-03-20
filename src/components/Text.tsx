import { CSSProperties } from 'react'
import { styled } from 'goober'

import { FontSize } from '../utils'

interface TextProps {
  align?: CSSProperties['textAlign']
  transform?: CSSProperties['textTransform']
  size?: keyof typeof FontSize
}

const getSize = (props: TextProps) => {
  return props.size
    ? {
        fontSize: FontSize[props.size]
      }
    : undefined
}

const getAlign = (props: TextProps) => {
  return props.align
    ? {
        textAlign: props.align
      }
    : undefined
}

const getTransform = (props: TextProps) => {
  return props.transform
    ? {
        textTransform: props.transform
      }
    : undefined
}

export const Text = styled('span')<TextProps>`
  ${getSize}
  ${getAlign}
  ${getTransform}
`

export const Paragraph = styled('p')<TextProps>`
  ${getSize}
  ${getAlign}
  ${getTransform}
`

export const Heading = styled('h4')<TextProps>`
  ${getSize}
  ${getAlign}
  ${getTransform}
`

export const Anchor = styled('a')<TextProps>`
  ${getSize}
  ${getAlign}
  ${getTransform}

  color: var(--blue);

  &:not([href]) {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    outline-color: currentColor;
    outline-offset: 3px;
  }
`
