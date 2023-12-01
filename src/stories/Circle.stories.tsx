import type { Meta, StoryObj } from '@storybook/react'

import Circle from '@/stories/Circle'

const meta = {
  component: Circle,
  title: 'Example/Circle',
  argTypes: {
    variant: { control: 'select', options: ['orange', 'green', 'yellow'] },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Circle>

export default meta
type Story = StoryObj<typeof meta>

/**
 * オレンジ色の円です
 */
export const BaseCircle: Story = {
  args: {
    variant: 'orange',
  },
}

/**
 * 緑色の円です
 */
export const GreenCircle: Story = {
  args: {
    variant: 'green',
  },
}

/**
 * 黄色の円です
 */
export const YellowCircle: Story = {
  args: {
    variant: 'yellow',
  },
}

/**
 * 円の一覧です
 */
export const GroupCircle: Story = {
  render: () => (
    <div className="p-10">
      <Circle />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
}
