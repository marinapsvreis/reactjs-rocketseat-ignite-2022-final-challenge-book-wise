import { DefaultLayout } from "@/layouts/DefaultLayout"
import { signOut, useSession } from "next-auth/react"
import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
      <button onClick={() => signOut()}>Deslogar</button>
    </pre>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Inicio">
      {page}
    </DefaultLayout>
  )
}

export default HomePage;
