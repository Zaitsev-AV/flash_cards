import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      Hello
      <Button variant={'link'} as={'a'} href={'abrakadabra.com'}>
        LINK
      </Button>
    </div>
  )
}
