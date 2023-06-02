import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@nodamagewea/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],

  args: {
    src: 'https://github.com/srandersondev.png',
    alt: 'Anderson Silva',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
