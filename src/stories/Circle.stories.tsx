import type { Meta, StoryObj } from '@storybook/react'

import Circle from '@/stories/Circle'

const meta = {
  component: Circle,
  title: 'Circle',
  argTypes: {
    variant: { control: 'select' },
    options: ['orange', 'green', 'yellow'],
  },
} satisfies Meta<typeof Circle>

export default meta
type Story = StoryObj<typeof meta>

export const BaseCircle: Story = {
  args: {
    variant: 'orange',
  },
}

export const GreenCircle: Story = {
  args: {
    variant: 'green',
  },
}

export const YellowCircle: Story = {
  args: {
    variant: 'yellow',
  },
}

export const GroupCircle: Story = {
  render: () => (
    <div className="p-10">
      <Circle />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
}
