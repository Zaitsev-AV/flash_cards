import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './text_field.tsx'

const meta = {
  title: 'Components/Input',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'password', 'search'],
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
