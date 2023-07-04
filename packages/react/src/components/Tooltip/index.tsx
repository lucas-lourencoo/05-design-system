import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Button } from '../Button'
import { TooltipArrow, TooltipContent } from './styles'

interface TooltipProps {
  text: string
}

export function Tooltip({ text, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <Button>Hover me</Button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5} {...props}>
            {text}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
