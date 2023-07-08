import * as Dialog from '@radix-ui/react-dialog';
import { styled } from "../../../stitches.config";

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: '#00000099'
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 660,
  height: '100%',
  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px #00000080',
  padding: '$6 48px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: 6,
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray700'
  },

  '&::-webkit-scrollbar-thumb': {
    bakground: '$gray600'
  }

})

export const DialogClose = styled(Dialog.Close, {
  color: '$gray400',
  background: 'none',
  border: 'none',
  marginLeft: 'auto',
  marginBottom: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})