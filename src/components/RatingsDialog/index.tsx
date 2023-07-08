import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { DialogClose, DialogContent, DialogOverlay } from './styles'

type RatingsDialogProps =  {
  children: ReactNode
}

export const RatingsDialog = ({ children }: RatingsDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24}/>
          </DialogClose>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}