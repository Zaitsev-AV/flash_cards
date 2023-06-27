import { useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './custom_checkbox.module.scss'

export const CustomCheckbox = () => {
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
        <div className={s.wrapper}>
          <Checkbox.Root
            className={`${s.checkbox_root} ${checked ? s.checked : s.not_checked}`}
            defaultChecked
            id="c1"
            checked={checked}
            onClick={() => {
              setChecked(prevState => !prevState)
            }}
          >
            <Checkbox.Indicator className={s.checkbox_indicator}>
              <CheckIcon height={'20px'} width={'20px'} style={{ display: 'flex' }} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        <label className={s.label} htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
    </div>
  )
}
