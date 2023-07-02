import { useState } from 'react'

import { LogoIncubator, LookPassword } from '@/assets'
import { SearchIcon } from '@/assets/search.tsx'
import { LoginForm } from '@/components/auth/login-form/login-form.tsx'
import { Button } from '@/components/ui/button'
import { CustomCheckbox } from '@/components/ui/checkbox'
import { AvatarDropdownMenu } from '@/components/ui/dropdown-menu'
import { Header } from '@/components/ui/header'
import { CustomSelect } from '@/components/ui/select'
import { CustomSlider } from '@/components/ui/slider'
import { CustomTabs } from '@/components/ui/switch'
import { TextField } from '@/components/ui/tetx-field'
import { Typography } from '@/components/ui/typography'

export function App() {
  const [checked, setChecked] = useState(false)

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
        <CustomSelect disabled={false} />
      </div>
      <LoginForm />
      <div style={{ paddingLeft: '40%', paddingBottom: '250px', paddingTop: '250px' }}>
        <CustomTabs tabs={['My Packs', 'All Packs']} disabled={true} />
      </div>
    </div>
  )
}
