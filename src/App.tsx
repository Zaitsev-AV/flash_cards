import { LookPassword, LogoIncubator } from '@/assets'
import { SearchIcon } from '@/assets/search.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CustomCheckbox } from '@/components/ui/checkbox'
import { AvatarDropdownMenu } from '@/components/ui/dropdown-menu'
import { Header } from '@/components/ui/header'
import { CustomSlider } from '@/components/ui/slider/custom-slider.tsx'
import { TextField } from '@/components/ui/tetx-field'
import { Typography } from '@/components/ui/typography'

export function App() {
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
      <Card />
      <CustomCheckbox description={'Accept terms and conditions.'} disabled={true} />
      <div style={{ paddingLeft: '50%', paddingBottom: '250px' }}>
        <AvatarDropdownMenu />
      </div>
      <div style={{ paddingLeft: '50%', paddingBottom: '250px' }}>
        <CustomSlider />
      </div>
    </div>
  )
}
