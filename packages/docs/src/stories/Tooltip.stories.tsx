import { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@nego-tech/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    text: '26 de Outubro - Disponível',
    side: 'right',
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            height: '100vh',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
