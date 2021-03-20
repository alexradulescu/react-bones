import { styled } from 'goober'

import { Colors } from '../utils'

export interface BadgeProps {
  color?: keyof typeof Colors
}

const getBadgeColors = (props: BadgeProps) => {
  if (props?.color) {
    switch (props.color as Colors) {
      case Colors.Dark:
        return {
          color: 'var(--grey-100)',
          backgroundColor: 'var(--grey-800)'
        }
      case Colors.Primary:
        return {
          color: 'var(--blue)',
          backgroundColor: 'var(--blue-200)'
        }
      case Colors.Success:
        return {
          color: 'var(--green-dark)',
          backgroundColor: 'var(--green-light)'
        }
      case Colors.Danger:
        return {
          color: 'var(--red-dark)',
          backgroundColor: 'var(--red-light)'
        }
      case Colors.Warning:
        return {
          color: 'var(--yellow-dark)',
          backgroundColor: 'var(--yellow-light)'
        }
      case Colors.Light:
      default:
        return {
          color: 'var(--grey-800)',
          backgroundColor: 'var(--grey-200)'
        }
    }
  }
}

export const Badge = styled('span')<BadgeProps>`
  ${getBadgeColors};

  border-radius: var(--radius-small);
  padding: 2px 6px;
  margin: 0 2px;
  font-size: 90%;
  white-space: nowrap;
  text-decoration: none;
  font-family: inherit;
  font-variant-numeric: tabular-nums;
`
