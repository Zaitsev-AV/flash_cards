import { FC, ReactNode } from 'react'

import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './custom-select.module.scss'

import { Typography } from '@/components/ui/typography'

export type CustomSelectPropsType = {
  disabled?: boolean
}
export const CustomSelect: FC<CustomSelectPropsType> = ({ disabled }) => {
  return (
    <div>
      <label className={`${s.label} ${disabled && s.disabled}`} aria-disabled={disabled}>
        <Typography variant={'body_2'}>Select</Typography>
      </label>
      <Select.Root disabled={disabled}>
        <Select.Trigger className={s.trigger} aria-label="Food">
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon className={s.icon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.content} position={'popper'} side={'bottom'} sideOffset={0}>
            <Select.Viewport className={s.viewport}>
              <Select.Group>
                <SelectItem value="apple">
                  <Typography variant={'body_1'}>Select-box_1</Typography>
                </SelectItem>
                <SelectItem value="banana">
                  <Typography variant={'body_1'}>Select-box_2</Typography>
                </SelectItem>
                <SelectItem value="blueberry">
                  <Typography variant={'body_1'}>Select-box_3</Typography>
                </SelectItem>
                <SelectItem value="grapes">
                  <Typography variant={'body_1'}>Select-box_4</Typography>
                </SelectItem>
                <SelectItem value="pineapple">
                  <Typography variant={'body_1'}>Select-box_5</Typography>
                </SelectItem>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

type SelectItemPropsType = {
  children: ReactNode
  className?: string
  value: string
}

const SelectItem: FC<SelectItemPropsType> = ({ children, className, ...props }) => {
  return (
    <Select.Item className={s.item} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={s.item_indicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
