import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin']})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
    className={nunito.className}>
       <Component {...pageProps} />
    </div>
  )
}
