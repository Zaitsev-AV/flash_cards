import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './text-field.tsx'

import { LookPassword } from '@/assets'
import { SearchIcon } from '@/assets/search.tsx'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'password', 'search', 'error'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'please type text',
  },
}

export const Password: Story = {
  args: {
    variant: 'password',
    placeholder: 'please type text',
    children: (
      <>
        <LookPassword />
      </>
    ),
  },
}

export const Search: Story = {
  args: {
    variant: 'search',
    placeholder: 'please type text',
    children: (
      <>
        <SearchIcon />
      </>
    ),
  },
}
export const Error: Story = {
  args: {
    variant: 'default',
    placeholder: 'please type text',
    error: true,
  },
}
