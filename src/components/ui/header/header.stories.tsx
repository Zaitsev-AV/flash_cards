import { Meta, StoryObj } from '@storybook/react'

import { LogoIncubator } from '../../../assets'
import { UserAvatar } from '../avatar/avatar.tsx'
import { Button } from '../button'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Header_App: Story = {
  args: {
    children: (
      <>
        <LogoIncubator />
        <Button variant={'primary'}>Sign In</Button>
      </>
    ),
  },
}

export const Header_App_User_Avatar: Story = {
  args: {
    children: (
      <>
        <LogoIncubator />
        <UserAvatar />
      </>
    ),
  },
}
