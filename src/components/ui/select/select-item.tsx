import { FC, ReactNode } from 'react'

import * as Select from '@radix-ui/react-select'

import s from '@/components/ui/select/custom-select.module.scss'

type SelectItemPropsType = {
  children: ReactNode
  className?: string
  value: string
}

export const SelectItem: FC<SelectItemPropsType> = ({ children, className, ...props }) => {
  return (
    <Select.Item className={s.item} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}
