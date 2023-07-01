import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CustomCheckbox } from '@/components/ui/checkbox/custom-checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: CustomCheckbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CustomCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {},
}

export const CheckboxWithLabel: Story = {
  args: {
    description: 'Label for checkbox',
  },
}

export const Working_checkbox: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <CustomCheckbox
        onChange={setChecked}
        checked={checked}
        disabled={args.disabled}
        description={'Description'}
      />
    )
  },
}
