import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  tags: ['autodocs'],

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 1,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
