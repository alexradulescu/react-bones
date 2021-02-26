import { FC, HTMLAttributes } from 'react'
import { styled } from 'goober'

const StyledInput = styled('input')`
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;
  --black: #000000;

  appearance: none;
  -webkit-appearance: none;
  background: var(--black);
  border: 2px solid var(--grey-800);
  color: var(--grey-50);
  height: 48px;
  margin: 10px;

  &:focus,
  &:hover {
    appearance: none;
    -webkit-appearance: none;
    background: var(--black);
    outline: none;
    border-color: var(--grey-600);
  }
`

interface Props extends HTMLAttributes<HTMLInputElement> {}

export const Input: FC<Props> = (props) => {
  return <StyledInput {...props} />
}

Input.displayName = 'Input'
