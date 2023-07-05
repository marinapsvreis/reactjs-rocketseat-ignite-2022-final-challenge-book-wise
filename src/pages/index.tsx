import { signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data } = useSession()
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
      <button onClick={() => signOut()}>Deslogar</button>
    </pre>
  )
}
