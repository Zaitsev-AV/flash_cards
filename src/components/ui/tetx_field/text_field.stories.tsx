import type { Meta, StoryObj } from '@storybook/react'

import { Text_field } from './text_field.tsx'

const meta = {
  title: 'Components/Input',
  component: Text_field,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'password', 'search'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Text_field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'please type text',
  },
}
