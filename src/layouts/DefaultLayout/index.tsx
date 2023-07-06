import Head from "next/head"
import { ReactNode } from "react"
import { Container, Content } from "./styles"

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({children, title}: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
      </Head>
      <aside>sidebar</aside>
      <Content>
        {children}
      </Content>
    </Container>
  )
}