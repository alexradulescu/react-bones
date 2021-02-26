import { CSSProperties, FC, HTMLAttributes, useMemo, memo } from 'react'
import { styled } from 'goober'

enum Size {
  XXXS = '2px',
  XXS = '4px',
  XS = '8px',
  SM = '12px',
  MD = '16px',
  LG = '20px',
  XL = '24px',
  XXL = '28px',
  XXXL = '32px'
}

const StyledStack = styled('div')`
  display: flex;

  &[data-direction='true'] {
    flex-direction: var(--stack-direction);
  }
  &[data-align='true'] {
    align-items: var(--stack-align);
  }
  &[data-justify='true'] {
    justify-content: var(--stack-justify);
  }

  &[data-gap='true'] {
    gap: var(--stack-gap);
  }

  &[data-margin='true'] {
    margin: var(--stack-margin);
  }
  &[data-margin-top='true'] {
    margin-top: var(--stack-margin-top);
  }
  &[data-margin-right='true'] {
    margin-right: var(--stack-margin-right);
  }
  &[data-margin-bottom='true'] {
    margin-bottom: var(--stack-margin-bottom);
  }
  &[data-margin-left='true'] {
    margin-left: var(--stack-margin-left);
  }

  &[data-padding='true'] {
    padding: var(--stack-padding);
  }
  &[data-padding-top='true'] {
    padding-top: var(--stack-padding-top);
  }
  &[data-padding-right='true'] {
    padding-right: var(--stack-padding-right);
  }
  &[data-padding-bottom='true'] {
    padding-bottom: var(--stack-padding-bottom);
  }
  &[data-padding-left='true'] {
    padding-left: var(--stack-padding-left);
  }
`

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection']
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

export const VanillaStack: FC<StackProps> = memo(
  ({
    direction,
    align,
    justify,
    gap,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    style,
    ...remainingProps
  }) => {
    const computedStyle = useMemo(
      () => ({
        '--stack-direction': direction,
        '--stack-align': align,
        '--stack-justify': justify,

        '--stack-gap': gap ? Size[gap] : null,

        '--stack-margin': m ? Size[m] : null,
        '--stack-margin-top': mt ? Size[mt] : my ? Size[my] : null,
        '--stack-margin-right': mr ? Size[mr] : mx ? Size[mx] : null,
        '--stack-margin-bottom': mb ? Size[mb] : my ? Size[my] : null,
        '--stack-margin-left': ml ? Size[ml] : mx ? Size[mx] : null,

        '--stack-padding': p ? Size[p] : null,
        '--stack-padding-top': pt ? Size[pt] : py ? Size[py] : null,
        '--stack-padding-right': pr ? Size[pr] : px ? Size[px] : null,
        '--stack-padding-bottom': pb ? Size[pb] : py ? Size[py] : null,
        '--stack-padding-left': pl ? Size[pl] : px ? Size[px] : null,
        ...style
      }),
      [
        direction,
        align,
        justify,
        gap,
        m,
        mx,
        my,
        mt,
        mr,
        mb,
        ml,
        p,
        px,
        py,
        pt,
        pr,
        pb,
        pl,
        style
      ]
    )

    return (
      <StyledStack
        data-direction={Boolean(direction)}
        data-align={Boolean(align)}
        data-justify={Boolean(justify)}
        data-gap={Boolean(gap)}
        data-margin={Boolean(m)}
        data-margin-top={Boolean(mt || my)}
        data-margin-right={Boolean(mr || mx)}
        data-margin-bottom={Boolean(mb || my)}
        data-margin-left={Boolean(ml || mx)}
        data-padding={Boolean(p)}
        data-padding-top={Boolean(pt || py)}
        data-padding-right={Boolean(pr || px)}
        data-padding-bottom={Boolean(pb || py)}
        data-padding-left={Boolean(pl || px)}
        style={computedStyle}
        {...remainingProps}
      />
    )
  }
)
