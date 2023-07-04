import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@nego-tech/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
