import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './custom-checkbox.module.scss'

export type CustomCheckboxPropsType = {
  description?: string
  disabled?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export const CustomCheckbox: FC<CustomCheckboxPropsType> = props => {
  const { description, disabled, checked, onChange } = props

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
        <div className={s.wrapper}>
          <Checkbox.Root
            className={`${s.root} ${checked && s.checked} `}
            defaultChecked
            onCheckedChange={onChange}
            checked={checked}
            disabled={disabled}
          >
            {checked && (
              <Checkbox.Indicator className={`${s.indicator} ${disabled ? s.disabled : ''}`}>
                <CheckIcon height={'20px'} width={'20px'} style={{ display: 'flex' }} />
              </Checkbox.Indicator>
            )}
          </Checkbox.Root>
        </div>
        <label className={s.label}>{description}</label>
      </div>
    </div>
  )
}
