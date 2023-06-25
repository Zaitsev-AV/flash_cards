import { LogoIncubator } from './assets'
import { Button } from './components/ui/button'
import { Header } from './components/ui/header'

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
    </div>
  )
}
