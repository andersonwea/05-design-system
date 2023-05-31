import type { StoryObj, Meta } from '@storybook/react'
import { Text, TetxProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nulla ratione dolorem porro at! Placeat facere cum commodi praesentium perferendis vero ea ipsa, quod ex aliquid nobis dicta fuga unde?',
  },
} as Meta<TetxProps>

export const Primary: StoryObj<TetxProps> = {}

export const CustomTag: StoryObj<TetxProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
