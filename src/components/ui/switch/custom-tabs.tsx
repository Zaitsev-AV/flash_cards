import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './custom-tabs.module.scss'

import { Typography } from '@/components/ui/typography'

export type CustomTabsPropsType = {
  tabs: string[]
  label?: string
  defaultValue?: number
  disabled?: boolean
}
//todo: add callback in onChangeValue

export const CustomTabs: FC<CustomTabsPropsType> = props => {
  const { tabs, label, defaultValue = 1, disabled = false } = props

  return (
    <div>
      <label>{label}</label>
      <Tabs.Root className={s.root} defaultValue={tabs[defaultValue]}>
        <Tabs.List className={s.list}>
          {tabs.map((el, i) => {
            return (
              <Tabs.Trigger asChild className={s.trigger} value={el} key={i} disabled={disabled}>
                <Typography variant={'body_1'}>{el}</Typography>
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
