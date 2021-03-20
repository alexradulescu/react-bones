import { CSSProperties } from 'react'
import { styled } from 'goober'

export enum FontSize {
  XS = '12px',
  SM = '14px',
  MD = '16px',
  LG = '20px',
  XL = '24px',
  '2XL' = '28px',
  '3XL' = '32px'
}

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
