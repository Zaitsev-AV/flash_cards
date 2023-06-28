import { FC, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './custom-checkbox.module.scss'

export type CustomCheckboxPropsType = {
  description?: string
  disabled?: boolean
}

export const CustomCheckbox: FC<CustomCheckboxPropsType> = props => {
  const { description, disabled } = props
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
        <div className={s.wrapper}>
          <Checkbox.Root
            className={`${s.checkbox_root} ${checked && s.checked} `}
            defaultChecked
            onCheckedChange={() => setChecked(prevState => !prevState)}
            checked={checked}
            disabled={disabled}
          >
            <Checkbox.Indicator className={`${s.checkbox_indicator} ${disabled ? s.disabled : ''}`}>
              <CheckIcon height={'20px'} width={'20px'} style={{ display: 'flex' }} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        <label className={s.label}>{description}</label>
      </div>
    </div>
  )
}
