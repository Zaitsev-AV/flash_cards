import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import * as Label from '@radix-ui/react-label'

import s from './input.module.scss'

export type InputPropsType<T extends ElementType = 'input'> = {
  as?: T
  variant?: 'default' | 'password' | 'search'
  className?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<'input'>
export const Input = <T extends ElementType = 'input'>(
  props: InputPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputPropsType<T>>
) => {
  const { variant = 'default', as: Component = 'input', className, children, ...rest } = props

  return (
    <div className={s.container}>
      <label className={s.label_field}>
        <Label.Root className={s.LabelRoot} htmlFor="firstName">
          First name
        </Label.Root>
      </label>
      <div className={s.wrapper}>
        <div className={s.field}>
          <div className={s.icon}>{children ? children : ''}</div>
          <div style={{ width: '100%' }}>
            <Component className={`${s[variant]}  ${className}`} {...rest} />
          </div>
        </div>
      </div>
    </div>
  )
}
