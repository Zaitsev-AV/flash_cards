import { ComponentPropsWithoutRef, ElementType, ReactNode, useState } from 'react'

import classNames from 'classnames'

import s from './text-field.module.scss'

import { Typography } from '@/components/ui/typography'

export type InputPropsType<T extends ElementType = 'input'> = {
  as?: T
  variant?: 'default' | 'password' | 'search'
  className?: string
  children?: ReactNode
  error?: boolean
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = <T extends ElementType = 'input'>(
  props: InputPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputPropsType<T>>
) => {
  const {
    variant = 'default',
    as: Component = 'input',
    className,
    children,
    error,
    label,
    ...rest
  } = props
  const [err, setErr] = useState(error)

  const wrapperClassName = classNames(s.wrapper, { [s.error]: err })

  return (
    <div className={s.container}>
      {label && (
        <Typography variant={'body_2'} as={'label'}>
          {label}
        </Typography>
      )}
      <div className={wrapperClassName} tabIndex={0}>
        <div
          className={classNames(s.field, {
            [s._search]: variant === 'search',
          })}
        >
          {(variant === 'password' || 'search') && <div className={s.icon}>{children}</div>}
          <div style={{ width: '100%' }}>
            <Component className={classNames(s[variant], { [s.error]: err })} {...rest} />
          </div>
        </div>
      </div>
      <span onClick={() => setErr(false)} style={{ color: 'var(--color-danger-300)' }}>
        {err && <Typography variant={'error'}>ERROR!</Typography>}
      </span>
    </div>
  )
}
