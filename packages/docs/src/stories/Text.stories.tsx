import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@nodamagewea/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nulla ratione dolorem porro at! Placeat facere cum commodi praesentium perferendis vero ea ipsa, quod ex aliquid nobis dicta fuga unde?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
