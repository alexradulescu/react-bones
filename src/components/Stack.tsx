import { CSSProperties } from 'react'
import { styled } from 'goober'

export enum Size {
  '3XS' = '2px',
  '2XS' = '4px',
  XS = '8px',
  SM = '12px',
  MD = '16px',
  LG = '20px',
  XL = '24px',
  '2XL' = '28px',
  '3XL' = '32px'
}

interface StackProps {
  direction?: CSSProperties['flexDirection']
  flexChildren?: CSSProperties['flex']
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  gap?: keyof typeof Size
  m?: keyof typeof Size
  mx?: keyof typeof Size
  my?: keyof typeof Size
  mt?: keyof typeof Size
  mr?: keyof typeof Size
  mb?: keyof typeof Size
  ml?: keyof typeof Size
  p?: keyof typeof Size
  px?: keyof typeof Size
  py?: keyof typeof Size
  pt?: keyof typeof Size
  pr?: keyof typeof Size
  pb?: keyof typeof Size
  pl?: keyof typeof Size
}

const getDirection = (props: StackProps) => {
  return props.direction
    ? {
        flexDirection: props.direction || 'initial'
      }
    : undefined
}

const getFlexChildren = (props: StackProps) => {
  return props.flexChildren
    ? {
        '& > *': {
          flex: props.flexChildren || 'initial'
        }
      }
    : undefined
}

const getAlign = (props: StackProps) => {
  return props.align
    ? {
        alignItems: props.align
      }
    : undefined
}

const getJustify = (props: StackProps) => {
  return props.justify
    ? {
        justifyContent: props.justify
      }
    : undefined
}

const getGap = (props: StackProps) => {
  return props.gap
    ? {
        gap: Size[props.gap]
      }
    : undefined
}
const getMargin = (props: StackProps) => {
  return props.m
    ? {
        margin: Size[props.m]
      }
    : undefined
}
const getMarginTop = (props: StackProps) => {
  return props.mt
    ? {
        marginTop: Size[props.mt]
      }
    : props.my
    ? {
        marginTop: Size[props.my]
      }
    : undefined
}
const getMarginRight = (props: StackProps) => {
  return props.mr
    ? {
        marginTop: Size[props.mr]
      }
    : props.mx
    ? {
        marginTop: Size[props.mx]
      }
    : undefined
}
const getMarginBottom = (props: StackProps) => {
  return props.mb
    ? {
        marginTop: Size[props.mb]
      }
    : props.my
    ? {
        marginTop: Size[props.my]
      }
    : undefined
}
const getMarginLeft = (props: StackProps) => {
  return props.ml
    ? {
        marginTop: Size[props.ml]
      }
    : props.mx
    ? {
        marginTop: Size[props.mx]
      }
    : undefined
}
const getMargins = (props: StackProps) => {
  return {
    ...getMargin(props),
    ...getMarginTop(props),
    ...getMarginRight(props),
    ...getMarginBottom(props),
    ...getMarginLeft(props)
  }
}
const getPadding = (props: StackProps) => {
  return props.p
    ? {
        padding: Size[props.p]
      }
    : undefined
}
const getPaddingTop = (props: StackProps) => {
  return props.pt
    ? {
        marginTop: Size[props.pt]
      }
    : props.py
    ? {
        marginTop: Size[props.py]
      }
    : undefined
}
const getPaddingRight = (props: StackProps) => {
  return props.pr
    ? {
        marginTop: Size[props.pr]
      }
    : props.px
    ? {
        marginTop: Size[props.px]
      }
    : undefined
}
const getPaddingBottom = (props: StackProps) => {
  return props.pb
    ? {
        marginTop: Size[props.pb]
      }
    : props.py
    ? {
        marginTop: Size[props.py]
      }
    : undefined
}
const getPaddingLeft = (props: StackProps) => {
  return props.pl
    ? {
        marginTop: Size[props.pl]
      }
    : props.px
    ? {
        marginTop: Size[props.px]
      }
    : undefined
}
const getPaddings = (props: StackProps) => {
  return {
    ...getPadding(props),
    ...getPaddingTop(props),
    ...getPaddingRight(props),
    ...getPaddingBottom(props),
    ...getPaddingLeft(props)
  }
}

export const HStack = styled('div')<StackProps>`
  display: flex;

  ${getFlexChildren}
  ${getAlign}
  ${getJustify}

  ${getGap}

  ${getMargins}
  ${getPaddings}
`

export const Stack = styled(HStack)<StackProps>`
  ${getDirection}
`

export const VStack = styled(HStack)<StackProps>`
  flex-direction: column;
`
