import { useState } from 'react'

import { LogoIncubator, LookPassword } from '@/assets'
import { SearchIcon } from '@/assets/search.tsx'
import { LoginForm } from '@/components/auth/login-form/login-form.tsx'
import { Button } from '@/components/ui/button'
import { CustomCheckbox } from '@/components/ui/checkbox'
import { AvatarDropdownMenu } from '@/components/ui/dropdown-menu'
import { Header } from '@/components/ui/header'
import { CustomRadioGroup } from '@/components/ui/radio-group/custom-radio-group.tsx'
import { CustomSelect } from '@/components/ui/select'
import { CustomSlider } from '@/components/ui/slider'
import { CustomTabs } from '@/components/ui/switch'
import { TextField } from '@/components/ui/tetx-field'
import { Typography } from '@/components/ui/typography'

export function App() {
  const [checked, setChecked] = useState(false)
  const radioItems = [
    {
      label: 'Radio_1',
      id: '1231235dww',
      value: 'value_1',
    },
    {
      label: 'Radio_2',
      id: '5851616dww',
      value: 'value_2',
    },
    {
      label: 'Radio_3',
      id: '885222sdfs',
      value: 'value_3',
    },
  ]

  return (
    <div>
      <Header>
        <LogoIncubator />
        <Button variant={'primary'}>Sign In</Button>
      </Header>
      Hello
      <Button variant={'link'} as={'a'} href={'abrakadabra.com'}>
        LINK
      </Button>
      <TextField variant={'password'} placeholder={'please type text'}>
        <LookPassword />
      </TextField>
      <TextField variant={'search'}>
        <SearchIcon />
      </TextField>
      <Typography variant={'link_1'} as="a" href={'/.dgsdf'}>
        Causerie Test Zurich Weatherstripped 31 8004 Zurich, ZH, CH
      </Typography>
      <CustomCheckbox
        description={'Accept terms and conditions.'}
        disabled={false}
        checked={checked}
        onChange={setChecked}
      />
      <div style={{ paddingLeft: '50%', paddingBottom: '250px' }}>
        <AvatarDropdownMenu />
      </div>
      <div style={{ paddingLeft: '50%', paddingBottom: '250px' }}>
        <CustomSlider />
      </div>
      <div style={{ paddingLeft: '50%', paddingBottom: '250px', width: '500px', height: '500px' }}>
        <CustomSelect items={['item_1', 'item_2', 'item_3', 'item_4', 'item_5']} label={'label'} />
      </div>
      <LoginForm />
      <div style={{ paddingLeft: '40%', paddingBottom: '250px', paddingTop: '250px' }}>
        <CustomTabs tabs={['My Packs', 'All Packs']} disabled={true} />
      </div>
      <div style={{ paddingLeft: '40%', paddingBottom: '250px', paddingTop: '250px' }}>
        <CustomRadioGroup items={radioItems} onChange={() => {}} />
      </div>
    </div>
  )
}
