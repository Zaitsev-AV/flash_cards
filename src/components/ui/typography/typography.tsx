import { FC, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyPropsType = {
  variant:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body_1'
    | 'body_2'
    | 'subtitle_1'
    | 'subtitle_2'
    | 'caption'
    | 'overline'
    | 'link_1'
    | 'link_2'
  children: ReactNode
}
export const Typography: FC<TypographyPropsType> = ({ children, variant }) => {
  return <span className={`${s[variant]}`}>{children}</span>
}
