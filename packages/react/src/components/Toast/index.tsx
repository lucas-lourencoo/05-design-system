import { X } from 'phosphor-react'
import { useState } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { Button } from '../Button'

export interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastRadix.Provider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Add to calendar
      </Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose asChild>
          <X weight="bold" />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}
