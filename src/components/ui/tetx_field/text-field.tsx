import { ComponentPropsWithoutRef, ElementType, ReactNode, useState } from 'react'

import * as Label from '@radix-ui/react-label'
import classNames from 'classnames'

import s from './text-field.module.scss'

export type InputPropsType<T extends ElementType = 'input'> = {
  as?: T
  variant?: 'default' | 'password' | 'search'
  className?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const TextField = <T extends ElementType = 'input'>(
  props: InputPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputPropsType<T>>
) => {
  const { variant = 'default', as: Component = 'input', className, children, ...rest } = props
  const [error, setError] = useState(true)

  const wrapperClassName = classNames(s.wrapper, { [s.error]: error })

  return (
    <div className={s.container}>
      <Label.Root className={s.label_field} htmlFor="firstName">
        First name
      </Label.Root>
      <div className={wrapperClassName} tabIndex={0}>
        <div
          className={classNames(s.field, {
            [s._search]: variant === 'search',
          })}
        >
          {(variant === 'password' || 'search') && <div className={s.icon}>{children}</div>}
          <div style={{ width: '100%' }}>
            <Component className={classNames(s[variant], { [s.error]: error })} {...rest} />
          </div>
        </div>
      </div>
      <span onClick={() => setError(false)}>{error && 'ERROR!'}</span>
    </div>
  )
}